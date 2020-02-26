import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true, // `false` if you want to ensure fresh data
});

export const fetchSanityDocument = url => client.fetch(url);

const urlBuilder = imageUrlBuilder(client);

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
        .height(400)
        .url(),
    },
  };
}
