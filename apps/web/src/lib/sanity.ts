import imageUrlBuilder from '@sanity/image-url';
import { config } from './config';

type Img = {
  src: string;
  width: number;
  height: number;
};

type ImgSizes = Img & { srcSet: Img[] };

const urlFor = (source: Sanity.ImageObject) =>
  imageUrlBuilder(config).image(source).auto('format');

export function getImageSizes(image: Sanity.ImageObject): ImgSizes {
  const { aspectRatio } = image.asset.metadata.dimensions;
  return {
    src: urlFor(image).width(900).url(),
    width: 900,
    height: Math.round(900 / aspectRatio),
    srcSet: [
      {
        src: urlFor(image).url(),
        width: image.asset.metadata.dimensions.width,
        height: image.asset.metadata.dimensions.height,
      },
      {
        src: urlFor(image).width(1024).url(),
        width: 1024,
        height: Math.round(1024 / aspectRatio),
      },
      {
        src: urlFor(image).height(400).url(),
        width: 400,
        height: Math.round(400 / aspectRatio),
      },
    ],
  };
}
