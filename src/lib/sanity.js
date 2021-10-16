import { createImageUrlBuilder } from 'next-sanity';
import { config } from './config';

const urlFor = source => createImageUrlBuilder(config).image(source);

export function getImageSizes(img) {
  return {
    aspectRatio: img.asset.metadata.dimensions.aspectRatio,
    source: {
      download: urlFor(img).url(),
      fullscreen: urlFor(img)
        .width(1024)
        .url(),
      regular: urlFor(img)
        .width(900)
        .url(),
      thumbnail: urlFor(img)
        .height(400)
        .url(),
    },
  };
}
