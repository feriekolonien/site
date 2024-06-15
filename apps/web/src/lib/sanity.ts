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
    src: urlFor(image).url(),
    width: image.asset.metadata.dimensions.width,
    height: image.asset.metadata.dimensions.height,

    srcSet: [
      {
        src: urlFor(image).width(320).url(),
        width: 320,
        height: Math.round(320 / aspectRatio),
      },
      {
        src: urlFor(image).width(640).url(),
        width: 640,
        height: Math.round(640 / aspectRatio),
      },
      {
        src: urlFor(image).width(1200).url(),
        width: 1200,
        height: Math.round(1200 / aspectRatio),
      },
      {
        src: urlFor(image).width(2048).url(),
        width: 2048,
        height: Math.round(2048 / aspectRatio),
      },
    ],
  };
}
