import { createImageUrlBuilder } from 'next-sanity';
import { config } from './config';

const urlFor = (source: Sanity.ImageObject) =>
  createImageUrlBuilder(config).image(source);

export function getImageSizes(image: Sanity.ImageObject) {
  return {
    aspectRatio: image.asset.metadata.dimensions.aspectRatio,
    source: {
      download: urlFor(image).url(),
      fullscreen: urlFor(image).width(1024).url(),
      regular: urlFor(image).width(900).url(),
      thumbnail: urlFor(image).height(400).url(),
    },
  };
}
