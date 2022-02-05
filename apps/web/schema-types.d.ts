/// <reference types="@sanity-codegen/types" />

declare namespace Sanity {
  type SanityImageMetadata = {
    _type: 'sanity.imageMetadata';
    dimensions: SanityImageDimensions;
    hasAlpha: boolean;
    isOpaque: boolean;
    lqip: string;
    palette: SanityImagePalette;
  };

  type SanityImageDimensions = {
    _type: 'sanity.imageDimensions';
    aspectRatio: number;
    height: number;
    width: number;
  };

  type SanityImageAsset = Sanity.Document & {
    _type: 'sanity.imageAsset';
    assetId: string;
    extension: string;
    metadata: SanityImageMetadata;
    mimeType: string;
    originalFilename: string;
    path: string;
    sha1hash: string;
    size: number;
    uploadId: string;
    url: string;
  };

  type ImageObject = {
    asset: SanityImageAsset;
    crop?: Sanity.ImageCrop;
    hotspot?: Sanity.ImageHotspot;
  };

  namespace Schema {
    /**
     * Album
     */
    interface Album extends Sanity.Document {
      _type: 'album';

      /**
       * Title - `String`
       */
      title?: string;

      /**
       * Cover Image - `Image`
       */
      coverImage?: ImageObject;

      /**
       * Images - `Array`
       */
      images?: Array<Sanity.Keyed<ImageObject>>;
    }

    type Document = Album;
  }
}
