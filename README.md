# Feriekolonien Studio

Sanity Studio for [feriekolonien.no](https://feriekolonien.no), hosted at
**https://feriekolonien.sanity.studio**.

The website itself lives in a separate repo
([feriekolonien/web](https://github.com/feriekolonien/web)) and reads published
content from the `production` dataset.

## Development

Requires Node 22.12 or newer.

```sh
npm install
npm run dev        # http://localhost:3333
npm run typecheck
npm run build
```

## Deployment

Every push to `main` is type-checked, built and deployed to Sanity hosting by
[`.github/workflows/studio.yml`](.github/workflows/studio.yml). Pull requests
are checked but not deployed.

The workflow needs a `SANITY_AUTH_TOKEN` repository secret: a token with the
**Deploy Studio** permission from
[sanity.io/manage](https://www.sanity.io/manage/project/bvwemm0b/api).

The studio has auto-updates enabled, so it picks up new v6 releases of Sanity
without a redeploy.

## Uploading photos

Photos are uploaded once a year with a script rather than through the Studio.
Each subfolder becomes a group in the album (`1.PARTI` → "1. parti"):

```sh
npm run upload-album -- --album 2027 --dir "~/Desktop/Bilder 2027" --dry-run
npm run upload-album -- --album 2027 --dir "~/Desktop/Bilder 2027"
```

The script converts HEIC to JPEG, skips files it can't read and lists them,
reuses photos that are already uploaded, and saves the album after every batch,
so it is safe to re-run. It needs `SANITY_TOKEN` (an Editor token) in `.env`.
See the comment at the top of [`scripts/upload-album.mjs`](scripts/upload-album.mjs)
for details.

After uploading, rebuild the website (push to the web repo, or run its deploy
workflow manually) to publish the new album.

## Backups

```sh
npm run backup:prod   # exports the production dataset to backups/
```
