import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true, // `false` if you want to ensure fresh data
});

// Get a pre-configured url-builder from your sanity client
export const urlBuilder = imageUrlBuilder(client);

export function fetchAlbums() {
  const query =
    '*[_type == "album"]{title, "coverPhoto": images[0]{asset -> {...}}}';

  return client.fetch(query).then(results => {
    return results;
  });
}

export function fetchSingleAlbum(albumName) {
  const query = `*[_type == "album" && title == "${albumName}"]{title, "images": images[]{asset->{...}}}[0]`;

  return client.fetch(query).then(results => {
    return results;
  });
}

export function getImageSizes(img) {
  return {
    aspectRatio: img.asset.metadata.dimensions.aspectRatio,
    source: {
      download: urlBuilder.image(img).url(),
      fullscreen: urlBuilder
        .image(img)
        .width(1024)
        .url(),
      regular: urlBuilder
        .image(img)
        .width(900)
        .url(),
      thumbnail: urlBuilder
        .image(img)
        .height(300)
        .url(),
    },
  };
}
