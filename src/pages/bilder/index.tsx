import React from 'react';
import Link from 'next/link';
import { groq } from 'next-sanity';

import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import Page from '../../components/Page';
import { sanityClient } from '../../lib/sanity.server';
import { getImageSizes } from '../../lib/sanity';
import { RiInstagramLine } from 'react-icons/ri';

type QueryResult = Array<Pick<Sanity.Schema.Album, 'title' | 'coverImage'>>;

const AlbumList = ({
  data,
}: {
  data: {
    albums: QueryResult;
  };
}) => {
  return (
    <Page title="Bilder">
      <Navigation />
      <section className="max-w-4xl mx-auto pt-4 pb-10 sm:pt-24 px-4 sm:px-6 md:px-8">
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-5xl mb-8">
          Bilder fra tidligere år
        </h1>
        <p className="mb-6 sm:mb-12 text-lg">
          På slutten av hver sommer legger vi ut bilder fra alle partiene vi har
          hatt her. Gjennom sommerferien legger vi som regel ut bilder på{' '}
          <a
            className="text-blue-900 underline font-semibold"
            href="https://www.instagram.com/feriekolonien/?utm_source=feriekolonien.no&utm_campaign=bilder"
          >
            Instagram <RiInstagramLine className="inline-block" />
          </a>
          .
        </p>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8"
        >
          {data.albums.map((album) => (
            <li key={album.title} className="relative">
              <Link key={album.title} href={`/bilder/${album.title}`}>
                <a className="">
                  <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                    <img
                      src={getImageSizes(album.coverImage).source.regular}
                      alt=""
                      className="object-cover pointer-events-none group-hover:opacity-75"
                    />
                  </div>
                  <p className="mt-2 block text-xl font-semibold text-gray-900 truncate pointer-events-none">
                    {album.title}
                  </p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </Page>
  );
};

export async function getStaticProps({ preview = false }) {
  try {
    const albums = await sanityClient.fetch<QueryResult>(
      groq`*[_type == "album" && title != "Historie"] | order(title desc)
      {title, coverImage {asset -> {...}}}`,
    );

    if (!albums || !albums?.length) {
      throw new Error(
        'Sanity fetch succeeded, but no albums were found. Please check Sanity',
      );
    }

    return {
      props: {
        preview,
        data: { albums },
      },
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default AlbumList;
