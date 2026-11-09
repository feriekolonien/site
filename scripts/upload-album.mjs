#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Upload a folder of photos to a Sanity album, one group per subfolder.
 *
 *   npm run upload-album -- --album 2026 --dir "~/Desktop/Bilder 2026" --dry-run
 *   npm run upload-album -- --album 2026 --dir "~/Desktop/Bilder 2026"
 *
 * Folder layout:
 *   <dir>/1.PARTI/*.jpg   -> group "1. parti"
 *   <dir>/2.PARTI/*.heic  -> group "2. parti"
 *   <dir>/*.jpg           -> ungrouped album images
 *
 * What it does:
 *   - Detects the real format from file contents (not the extension).
 *   - Converts formats Sanity rejects (HEIC/HEIF/AVIF) to JPEG with macOS `sips`.
 *   - Skips files that can't be decoded and lists them at the end.
 *   - Reuses assets that already exist in Sanity (matched by SHA-1), so it can be
 *     re-run safely after a failure and skips photos uploaded earlier via Studio.
 *   - Uploads in batches and saves the album after each batch, so progress
 *     shows up in Studio as it goes.
 *   - Merges into existing groups: keeps existing images (and their alt text,
 *     hotspot, order) and appends new ones sorted by capture time. Images
 *     placed in a group are removed from the album's ungrouped `images` list.
 *   - Writes to the published document. If Studio has an unpublished draft of
 *     the album, its contents are carried over and the draft is removed (same
 *     as pressing "Publish"). Use --draft to write to the draft instead.
 *
 * Auth: SANITY_TOKEN in .env (an Editor token from sanity.io/manage), or the
 * Sanity CLI login (`npx sanity login`). --dry-run works without auth.
 */
import { execFile } from 'node:child_process';
import { createHash, randomUUID } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { mkdir, readdir, readFile, stat } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { parseArgs, promisify } from 'node:util';

const exec = promisify(execFile);
const API_VERSION = '2021-06-07';

// ---------------------------------------------------------------------------
// Config

const { values: args } = parseArgs({
  options: {
    album: { type: 'string' },
    dir: { type: 'string' },
    dataset: { type: 'string' },
    'dry-run': { type: 'boolean', default: false },
    draft: { type: 'boolean', default: false },
    'batch-size': { type: 'string', default: '25' },
    concurrency: { type: 'string', default: '4' },
    help: { type: 'boolean', short: 'h', default: false },
  },
});

if (args.help || !args.album || !args.dir) {
  console.log(`Usage: node scripts/upload-album.mjs --album <title> --dir <folder> [options]

Options:
  --dry-run          Check and convert files, show the plan, upload nothing
  --draft            Write to the album's draft instead of publishing
  --dataset <name>   Default: production
  --batch-size <n>   Files per batch before the album is saved (default 25)
  --concurrency <n>  Parallel uploads (default 4)`);
  process.exit(args.help ? 0 : 1);
}

const projectId = 'bvwemm0b';
const dataset = args.dataset || 'production';
const sourceDir = path.resolve(args.dir.replace(/^~(?=$|\/)/, os.homedir()));
const albumTitle = args.album;
const dryRun = args['dry-run'];
const batchSize = Math.max(1, Number(args['batch-size']));
const concurrency = Math.max(1, Number(args.concurrency));
const convertDir = path.join(os.tmpdir(), 'sanity-album-upload');

function readToken() {
  if (process.env.SANITY_TOKEN) return process.env.SANITY_TOKEN;
  const cliConfig = path.join(os.homedir(), '.config', 'sanity', 'config.json');
  if (existsSync(cliConfig)) {
    try {
      return JSON.parse(readFileSync(cliConfig, 'utf8')).authToken;
    } catch {
      // ignore
    }
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// Sanity HTTP API

let token = readToken();

async function api(pathname, { method = 'GET', body, headers = {}, auth = true } = {}) {
  const url = `https://${projectId}.api.sanity.io/v${API_VERSION}${pathname}`;
  const res = await fetch(url, {
    method,
    body,
    headers: {
      ...(auth && token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = undefined;
  }
  if (!res.ok) {
    const message = json?.error?.description || json?.message || json?.error || text;
    const error = new Error(`${res.status} ${typeof message === 'string' ? message : JSON.stringify(message)}`);
    error.status = res.status;
    throw error;
  }
  return json;
}

async function query(groq, params = {}) {
  // API version 2021-06-07 returns drafts too ("raw" perspective) when authenticated.
  const search = new URLSearchParams({ query: groq });
  for (const [key, value] of Object.entries(params)) {
    search.set(`$${key}`, JSON.stringify(value));
  }
  const res = await api(`/data/query/${dataset}?${search}`, { auth: Boolean(token) });
  return res.result;
}

async function mutate(mutations) {
  return api(`/data/mutate/${dataset}?returnIds=true&visibility=sync`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mutations }),
  });
}

async function checkToken() {
  if (!token) return false;
  try {
    await api(`/data/query/${dataset}?query=${encodeURIComponent('count(*[_id in path("drafts.**")][0...1])')}`);
    return true;
  } catch (error) {
    if (error.status === 401 || error.status === 403) {
      token = undefined;
      return false;
    }
    throw error;
  }
}

async function withRetry(label, fn, attempts = 4) {
  for (let attempt = 1; ; attempt++) {
    try {
      return await fn();
    } catch (error) {
      const retryable = !error.status || error.status === 429 || error.status >= 500;
      if (!retryable || attempt >= attempts) throw error;
      const delay = 1000 * 2 ** (attempt - 1);
      console.warn(`  ↻ ${label}: ${error.message} – retrying in ${delay / 1000}s`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

async function pool(items, size, fn) {
  const results = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const index = next++;
      results[index] = await fn(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, worker));
  return results;
}

// ---------------------------------------------------------------------------
// Files

// Formats the Sanity image pipeline accepts as-is.
const SUPPORTED = {
  jpeg: { mime: 'image/jpeg', ext: 'jpg' },
  png: { mime: 'image/png', ext: 'png' },
  gif: { mime: 'image/gif', ext: 'gif' },
  webp: { mime: 'image/webp', ext: 'webp' },
  tiff: { mime: 'image/tiff', ext: 'tiff' },
};
// Formats we convert to JPEG first.
const CONVERT = new Set(['heic', 'avif']);

function sniff(buf) {
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'jpeg';
  if (buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return 'png';
  if (buf.subarray(0, 4).toString('latin1') === 'GIF8') return 'gif';
  if (buf.subarray(0, 4).toString('latin1') === 'RIFF' && buf.subarray(8, 12).toString('latin1') === 'WEBP') {
    return 'webp';
  }
  const head4 = buf.subarray(0, 4).toString('latin1');
  if (head4 === 'II*\0' || head4 === 'MM\0*') return 'tiff';
  if (buf.subarray(4, 8).toString('latin1') === 'ftyp') {
    const brand = buf.subarray(8, 12).toString('latin1');
    if (brand === 'avif' || brand === 'avis') return 'avif';
    if (['heic', 'heix', 'heim', 'heis', 'hevc', 'hevx', 'mif1', 'msf1'].includes(brand)) return 'heic';
  }
  return 'unknown';
}

async function sipsInfo(file) {
  try {
    const { stdout } = await exec('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', '-g', 'creation', file]);
    const get = (key) => stdout.match(new RegExp(`${key}: (.+)`))?.[1]?.trim();
    const width = Number(get('pixelWidth'));
    const height = Number(get('pixelHeight'));
    if (!width || !height) return undefined;
    // "2026:06:28 07:45:37" -> sortable "2026-06-28T07:45:37"
    const creation = get('creation')?.replace(/^(\d{4}):(\d{2}):(\d{2}) /, '$1-$2-$3T');
    return { width, height, creation };
  } catch {
    return undefined;
  }
}

async function convertToJpeg(file, relPath) {
  await mkdir(convertDir, { recursive: true });
  const hash = createHash('sha1').update(relPath).digest('hex').slice(0, 8);
  const out = path.join(convertDir, `${path.parse(file).name}-${hash}.jpg`);
  await exec('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '90', file, '--out', out]);
  return out;
}

function groupTitleFromDir(name) {
  const parti = name.match(/^(\d+)\s*\.?\s*parti$/i);
  return parti ? `${parti[1]}. parti` : name;
}

const isImageCandidate = (name) => !name.startsWith('.');

async function collectFiles() {
  const entries = await readdir(sourceDir, { withFileTypes: true });
  const sortNatural = (a, b) => a.name.localeCompare(b.name, 'nb', { numeric: true });
  const groups = [];

  const rootFiles = entries.filter((e) => e.isFile() && isImageCandidate(e.name)).sort(sortNatural);
  const subdirs = entries.filter((e) => e.isDirectory() && !e.name.startsWith('.')).sort(sortNatural);

  for (const dir of subdirs) {
    const files = (await readdir(path.join(sourceDir, dir.name), { withFileTypes: true }))
      .filter((e) => e.isFile() && isImageCandidate(e.name))
      .sort(sortNatural)
      .map((e) => path.join(sourceDir, dir.name, e.name));
    groups.push({ title: groupTitleFromDir(dir.name), dirName: dir.name, files });
  }
  if (rootFiles.length) {
    groups.push({ title: null, dirName: '.', files: rootFiles.map((e) => path.join(sourceDir, e.name)) });
  }
  return groups;
}

// Inspect a file and return what should be uploaded, or why it can't be.
async function prepare(file) {
  const relPath = path.relative(sourceDir, file);
  const bytes = await readFile(file);
  const format = sniff(bytes.subarray(0, 32));
  const parsed = path.parse(file);
  const ext = parsed.ext.slice(1).toLowerCase();
  const notes = [];

  let uploadPath = file;
  let uploadFormat = format;

  if (CONVERT.has(format)) {
    try {
      uploadPath = await convertToJpeg(file, relPath);
      uploadFormat = 'jpeg';
      notes.push(`converted ${format} → jpeg`);
    } catch (error) {
      return { file, relPath, error: `could not convert ${format}: ${error.message.split('\n')[0]}` };
    }
  } else if (!SUPPORTED[format]) {
    return { file, relPath, error: `unsupported or unrecognised file format (.${ext})` };
  } else {
    const expected = SUPPORTED[format].ext;
    const extMatches = ext === expected || (format === 'jpeg' && ext === 'jpeg') || (format === 'tiff' && ext === 'tif');
    if (!extMatches) notes.push(`extension .${ext} but file is ${format}`);
  }

  const info = await sipsInfo(uploadPath);
  if (!info) return { file, relPath, error: 'file could not be decoded (corrupt or truncated?)' };

  const buffer = uploadPath === file ? bytes : await readFile(uploadPath);
  const { mtimeMs } = await stat(file);
  return {
    file,
    relPath,
    uploadPath,
    filename: `${parsed.name}.${SUPPORTED[uploadFormat].ext}`,
    mime: SUPPORTED[uploadFormat].mime,
    size: buffer.length,
    sha1: createHash('sha1').update(buffer).digest('hex'),
    sortKey: info.creation || new Date(mtimeMs).toISOString(),
    notes,
  };
}

// ---------------------------------------------------------------------------
// Album document

const STRIP = new Set(['_rev', '_createdAt', '_updatedAt']);

async function fetchAlbum() {
  const docs = await query(`*[_type == "album" && title == $title]{...}`, { title: albumTitle });
  const published = docs.filter((d) => !d._id.startsWith('drafts.'));
  if (published.length > 1) {
    throw new Error(`Found ${published.length} albums titled "${albumTitle}" – rename or delete the extra ones first.`);
  }
  const pub = published[0];
  const draft = pub
    ? docs.find((d) => d._id === `drafts.${pub._id}`) ||
      (token ? await query(`*[_id == $id][0]`, { id: `drafts.${pub._id}` }) : undefined)
    : docs.find((d) => d._id.startsWith('drafts.'));
  return { pub, draft: draft || undefined };
}

const imageItem = (assetId, sha1) => ({
  _type: 'image',
  _key: sha1.slice(0, 12),
  asset: { _type: 'reference', _ref: assetId },
});

function keyFor(title, existingKeys) {
  let key = (title || 'gruppe').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'gruppe';
  while (existingKeys.has(key)) key += '-x';
  return key;
}

// Merge uploaded assets into the album. `placements` is [{ groupTitle, items: [{assetId, sha1}] }]
// with groupTitle === null meaning the ungrouped `images` list.
function mergeAlbum(base, placements) {
  const doc = Object.fromEntries(Object.entries(base).filter(([k]) => !STRIP.has(k)));
  // Drop entries without an asset: Studio leaves these behind (with an `_upload`
  // object) when an upload fails or is interrupted.
  const hasAsset = (img) => Boolean(img?.asset?._ref);
  doc.groups = [...(doc.groups || [])].map((g) => ({ ...g, images: (g.images || []).filter(hasAsset) }));
  doc.images = (doc.images || []).filter(hasAsset);

  const grouped = new Set();
  for (const { groupTitle, items } of placements) {
    let target;
    if (groupTitle === null) {
      target = doc.images;
    } else {
      let group = doc.groups.find((g) => g.title === groupTitle);
      if (!group) {
        group = {
          _type: 'albumGroup',
          _key: keyFor(groupTitle, new Set(doc.groups.map((g) => g._key))),
          title: groupTitle,
          images: [],
        };
        doc.groups.push(group);
      }
      target = group.images;
      for (const item of items) grouped.add(item.assetId);
    }
    const present = new Set(target.map((img) => img.asset?._ref));
    const keys = new Set(target.map((img) => img._key));
    for (const { assetId, sha1 } of items) {
      if (present.has(assetId)) continue;
      const item = imageItem(assetId, sha1);
      while (keys.has(item._key)) item._key += 'x';
      target.push(item);
      present.add(assetId);
      keys.add(item._key);
    }
  }

  doc.images = doc.images.filter((img) => !grouped.has(img.asset?._ref));
  if (!doc.groups.length) delete doc.groups;
  if (!doc.images.length) delete doc.images;

  if (!doc.coverImage) {
    const first = doc.groups?.[0]?.images?.[0] || doc.images?.[0];
    if (first) doc.coverImage = { _type: 'image', asset: first.asset };
  }
  return doc;
}

// ---------------------------------------------------------------------------
// Main

function fmtBytes(n) {
  return n > 1e9 ? `${(n / 1e9).toFixed(2)} GB` : `${(n / 1e6).toFixed(1)} MB`;
}

async function main() {
  console.log(`Project ${projectId}, dataset "${dataset}", album "${albumTitle}"`);
  console.log(`Source: ${sourceDir}${dryRun ? '  (dry run)' : ''}\n`);

  const authed = await checkToken();
  if (!authed) {
    if (!dryRun) {
      console.error(
        'No valid Sanity token. Either log in with `npx sanity login`, or create an Editor token at\n' +
          `https://www.sanity.io/manage/project/${projectId}/api and add SANITY_TOKEN=<token> to .env.`,
      );
      process.exit(1);
    }
    console.warn('⚠ No valid Sanity token – drafts are invisible in this dry run.\n');
  }

  // 1. Inspect files
  const groups = await collectFiles();
  const problems = [];
  for (const group of groups) {
    const prepared = await pool(group.files, 4, prepare);
    group.items = [];
    for (const p of prepared) {
      if (p.error) problems.push(p);
      else group.items.push(p);
    }
    group.items.sort((a, b) => a.sortKey.localeCompare(b.sortKey) || a.relPath.localeCompare(b.relPath));
  }

  // 2. Find assets that are already in Sanity
  const allItems = groups.flatMap((g) => g.items);
  const existing = new Map();
  const hashes = [...new Set(allItems.map((i) => i.sha1))];
  for (let i = 0; i < hashes.length; i += 200) {
    const found = await query(`*[_type == "sanity.imageAsset" && sha1hash in $hashes]{_id, sha1hash}`, {
      hashes: hashes.slice(i, i + 200),
    });
    for (const a of found) existing.set(a.sha1hash, a._id);
  }

  // 3. Report
  for (const group of groups) {
    const reuse = group.items.filter((i) => existing.has(i.sha1)).length;
    const upload = group.items.filter((i) => !existing.has(i.sha1));
    console.log(
      `${group.title ?? '(ungrouped)'}  ← ${group.dirName}/  ` +
        `${group.items.length} ok: ${upload.length} to upload (${fmtBytes(upload.reduce((s, i) => s + i.size, 0))}), ${reuse} already in Sanity`,
    );
    for (const i of group.items.filter((x) => x.notes.length)) {
      console.log(`    · ${i.relPath}: ${i.notes.join(', ')}`);
    }
  }
  if (problems.length) {
    console.log(`\n✗ ${problems.length} file(s) will be skipped:`);
    for (const p of problems) console.log(`    ${p.relPath}: ${p.error}`);
  }

  const { pub, draft } = await fetchAlbum();
  const baseId = pub?._id || draft?._id.replace(/^drafts\./, '') || randomUUID();
  const targetId = args.draft ? `drafts.${baseId}` : baseId;
  const deleteDraft = !args.draft && draft;
  console.log(
    `\nAlbum: ${pub ? `published ${pub._id}` : 'no published album'}` +
      `${draft ? `, draft ${draft._id}` : ''} → writing to ${targetId}` +
      (pub || draft ? '' : ' (new)'),
  );
  if (deleteDraft) {
    console.log('  The draft\'s contents are carried over and the draft is removed (like pressing "Publish").');
  }

  if (dryRun) {
    console.log('\nDry run – nothing uploaded. Converted files are in', convertDir);
    return;
  }

  // 4. Upload in batches, saving the album after each batch
  const failures = [];
  const assetFor = (item) => existing.get(item.sha1);
  let uploadedCount = 0;

  async function saveAlbum() {
    const current = await fetchAlbum();
    const base = current.draft || current.pub || {
      _type: 'album',
      title: albumTitle,
    };
    const placements = groups.map((g) => ({
      groupTitle: g.title,
      items: g.items.filter(assetFor).map((i) => ({ assetId: assetFor(i), sha1: i.sha1 })),
    }));
    const doc = { ...mergeAlbum(base, placements), _id: targetId, _type: 'album' };
    const mutations = [{ createOrReplace: doc }];
    if (deleteDraft && current.draft) mutations.push({ delete: { id: current.draft._id } });
    await withRetry('save album', () => mutate(mutations));
  }

  for (const group of groups) {
    const todo = group.items.filter((i) => !assetFor(i));
    const label = group.title ?? '(ungrouped)';
    if (!todo.length) {
      console.log(`\n${label}: nothing to upload`);
      await saveAlbum();
      continue;
    }
    console.log(`\n${label}: uploading ${todo.length} file(s)`);
    for (let start = 0; start < todo.length; start += batchSize) {
      const batch = todo.slice(start, start + batchSize);
      await pool(batch, concurrency, async (item) => {
        try {
          const body = await readFile(item.uploadPath);
          const res = await withRetry(item.relPath, () =>
            api(`/assets/images/${dataset}?filename=${encodeURIComponent(item.filename)}`, {
              method: 'POST',
              headers: { 'Content-Type': item.mime },
              body,
            }),
          );
          existing.set(item.sha1, res.document._id);
          uploadedCount++;
          console.log(`  ✓ ${item.relPath}`);
        } catch (error) {
          failures.push({ relPath: item.relPath, error: error.message });
          console.log(`  ✗ ${item.relPath}: ${error.message}`);
        }
      });
      await saveAlbum();
      console.log(`  — saved album (${Math.min(start + batchSize, todo.length)}/${todo.length})`);
    }
  }

  console.log(`\nDone. Uploaded ${uploadedCount}, reused ${allItems.length - uploadedCount - failures.length}.`);
  const skipped = [...problems.map((p) => ({ relPath: p.relPath, error: p.error })), ...failures];
  if (skipped.length) {
    console.log(`\n✗ ${skipped.length} file(s) not in the album:`);
    for (const s of skipped) console.log(`    ${s.relPath}: ${s.error}`);
    process.exitCode = 1;
  }
  console.log(`\nStudio: https://feriekolonien.sanity.studio/structure/album;${baseId}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
