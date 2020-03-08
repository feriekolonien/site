import { basename, join } from 'path';
import { createReadStream } from 'fs';

// eslint-disable-next-line import/no-extraneous-dependencies
import fg from 'fast-glob';
import sanityClient from '@sanity/client'; // eslint-disable-line
import nanoid from 'nanoid'; // eslint-disable-line

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const token =
  'skrAFHdJFvrhSaubpLTp3SfzSt1rhG3wLeTGzTmQ1LWRiXOvJiU4JUfZ4qZLXXHwZ0P4hy007WvsPctTsDent5E54vMfj0izCIizVg6Fa4HdNaFcrpBEXVha4Y7hIrrwkEVDVcnuIzqh7lrvsqBWmMfUueDhM2cXoPmwWz4QoyWGunMKW58w';

const client = sanityClient({
  projectId: 'bvwemm0b',
  dataset: 'development',
  token, // or leave blank to be anonymous user
});

function createChunks(arr, size) {
  return arr.reduce(
    (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
    [],
  );
}

const fetchAlbums = () =>
  client.fetch(`*[_type == 'album' && !(_id in path('drafts.**'))]`);

function addImageToAlbum(albumId, image) {
  return client
    .patch(albumId)
    .setIfMissing({ images: [] })
    .append('images', [
      {
        _key: nanoid(),
        _type: 'image',
        asset: {
          _ref: image._id,
          _type: 'reference',
        },
      },
    ])
    .commit()
    .then(() => {
      console.log('✅ Image added to', albumId);
    })
    .catch(err => {
      console.error('[addImageToAlbum] Transaction failed: ', err.message);
    });
}

function uploadImageAsset(filepath) {
  return client.assets.upload('image', createReadStream(filepath), {
    filename: basename(filepath),
  });
}

function getAbsolutePath() {
  const [first] = process.argv.slice(2);
  return first;
}

async function runScript() {
  console.log(
    `Running Upload Photos script for\nProjectId:\t${client.clientConfig.projectId}\nDataset:\t${client.clientConfig.dataset}\n\n`,
  );
  const startPath = getAbsolutePath();
  console.log(join(startPath, '**/*.jpg'));
  const entries = await fg([join(startPath, '**/*.jpg')], {
    caseSensitiveMatch: false,
  });
  const paginated = createChunks(entries, 3);
  readline.question(
    `Will upload ${entries.length} files in ${paginated.length} batches. Continue? (y/N) `,
    async answer => {
      if (answer && answer.toLowerCase() === 'y') {
        const uploadedImages = [];
        for (let index = 0; index < paginated.length; index++) {
          console.log(
            `starting batch #${index} (${paginated[index].length} files)`,
          );
          const waitForFileUpload = paginated[index].map(file =>
            uploadImageAsset(file),
          ); // returns promise

          // eslint-disable-next-line no-await-in-loop
          const images = await Promise.all(waitForFileUpload);
          uploadedImages.push(images);

          // eslint-disable-next-line no-await-in-loop
        }
        const flattened = uploadedImages.flat();
        const [, id] = process.argv.slice(2);
        if (id) {
          console.log(`Adding images to album ${id}`);
          const addToAlbums = flattened.map(image =>
            addImageToAlbum(id, image),
          );
          await Promise.all(addToAlbums);
        } else {
          console.log('Ok, will not add to album. Exiting.');
        }
      } else {
        console.log('Ok, will not do anything. Exiting.');
      }
      readline.close();
      process.exit(0);
    },
  );

  // console.log('/scripts/2013/2013_001.jpg');
  // console.log(client);
  // const image = await uploadImageAsset('2013/2013_002.jpg');
  // addImageToAlbum('54539d26-57b7-43ef-b48f-662fed10b086', image);

  // uploadImageAsset('./2013/2013_001.jpg').then(el => loca);
}

runScript();
