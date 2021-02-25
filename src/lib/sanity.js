import { createClient, createImageUrlBuilder } from 'next-sanity';

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true, // `false` if you want to ensure fresh data
};

export const sanityClient = createClient(config);

const urlBuilder = createImageUrlBuilder(config);

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
