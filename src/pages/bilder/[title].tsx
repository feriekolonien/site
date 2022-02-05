import React, { useCallback } from 'react';
import { groq } from 'next-sanity';
import Link from 'next/link';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Gallery from 'react-photo-gallery';

import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import Page from '../../components/Page';
import RenderInBrowser from '../../components/RenderInBrowser';
import { sanityClient } from '../../lib/sanity.server';
import { getImageSizes } from '../../lib/sanity';
import LazyImage from '../../components/LazyImage';

type SanityAlbum = Sanity.Schema.Album;

const AlbumPage = ({
  data,
}: {
  data: {
    album: SanityAlbum;
  };
}) => {
  const imageRenderer = useCallback(
    ({ photo, key }) => (
      <LazyImage
        alt="Stemningsbilde fra Feriekolonien på Filtvet"
        className="gallery-image"
        key={key}
        src={photo.src}
        height={photo.height}
        width={photo.width}
      />
    ),
    [],
  );

  if (!data.album?.images?.length) {
    return null;
  }

  const responsiveImages = data.album.images.map(getImageSizes);
  const albumTitle = data.album.title;
  const goBack = (
    <Link href="/bilder">
      <a>
        <p className="hover:text-slate-500">
          <RiArrowLeftSLine className="inline-block align-middle" /> Tilbake til
          oversikt
        </p>
      </a>
    </Link>
  );
  return (
    <Page title={`Album: ${albumTitle}`}>
      <Navigation />
      <section className="mx-auto max-w-4xl px-4 pt-4 pb-10 sm:px-6 sm:pt-20 md:px-8">
        <div className="mb-6 grid grid-cols-3 items-center sm:mb-12">
          {goBack}
          <h1 className="text-center text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            {albumTitle}
          </h1>
        </div>
        <RenderInBrowser>
          <Gallery
            renderImage={imageRenderer}
            photos={responsiveImages.map((img) => ({
              src: img.source.thumbnail || '',
              height: 1,
              width: img.aspectRatio,
            }))}
          />
        </RenderInBrowser>
        {goBack}
      </section>
      <Footer />
    </Page>
  );
};

const albumQuery = groq`
    *[_type == "album" && title == $slug][0]{
      title,
      coverImage{asset->{...}},
      "images": images[]{asset->{...}}
      }
    `;

export async function getStaticProps({
  params,
  preview = false,
}: {
  params: {
    title: Pick<Sanity.Schema.Album, 'title'>;
  };
  preview: boolean;
}) {
  try {
    const album = await sanityClient.fetch<SanityAlbum>(albumQuery, {
      slug: params.title,
    });
    if (!album || !album?.images?.length) {
      throw new Error(
        'Unable to build album page: Sanity fetch succeeded, but no images were found. Please check Sanity',
      );
    }

    return {
      props: {
        preview,
        data: { album },
      },
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

type SanityAlbumTitles = Array<Pick<Sanity.Schema.Album, 'title'>>;

export async function getStaticPaths() {
  try {
    const albums = await sanityClient.fetch<SanityAlbumTitles>(
      groq`*[_type == "album" && title != "Historie"].title`,
    );
    if (!albums || !albums?.length) {
      throw new Error(
        'Unable to generate any static paths: Sanity fetch succeeded, but no albums were found. Please check Sanity',
      );
    }
    return {
      paths: albums.map((title) => ({ params: { title } })),
      fallback: false,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default AlbumPage;
