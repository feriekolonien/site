import { groq } from 'next-sanity';
import Link from 'next/link';
import React from 'react';
import { RiInstagramLine } from 'react-icons/ri';
import Footer from '../../components/Footer';
import LazyImage from '../../components/LazyImage';
import Navigation from '../../components/Navigation';
import Page from '../../components/Page';
import { getImageSizes } from '../../lib/sanity';
import { sanityClient } from '../../lib/sanity.server';

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
      <section className="mx-auto mt-4 mb-10 max-w-4xl px-4 sm:mt-24 sm:px-6 md:px-8">
        <h1 className="mb-8 text-4xl font-bold sm:text-5xl lg:text-5xl ">
          Bilder fra tidligere år
        </h1>
        <p className="mb-6 text-lg sm:mb-12">
          På slutten av hver sommer legger vi ut bilder fra alle partiene vi har
          hatt her. Gjennom sommerferien legger vi som regel ut bilder på{' '}
          <a
            target="_blank"
            className="font-semibold text-blue-900 underline"
            href="https://www.instagram.com/feriekolonien/?utm_source=feriekolonien.no&utm_campaign=bilder"
            rel="noreferrer"
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
                  {album.coverImage && (
                    <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                      <span className="test">
                        <LazyImage
                          width={400}
                          height={280}
                          src={getImageSizes(album.coverImage).source.regular}
                          alt={`Albumlenke for ${album.title}`}
                          className="pointer-events-none object-cover group-hover:opacity-75"
                        />
                      </span>
                    </div>
                  )}
                  <p className="pointer-events-none mt-2 block truncate text-xl font-semibold text-gray-900">
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
