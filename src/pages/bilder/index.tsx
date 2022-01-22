import React from 'react';
import Link from 'next/link';
import { groq } from 'next-sanity';

import Footer from '../../components/Footer';
import SanityImage from '../../components/SanityImage';
import Navigation from '../../components/Navigation';
import Page from '../../components/Page';
import { HeroContent, HeroImage } from '../../components/PageComponents';
import { PageTitle } from '../../components/PageTitle';
import WaveDivider from '../../components/WaveDivider';
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
      <HeroImage
        src="/static/img/IMG_5962.jpg"
        alt="Innebandy-turnering på basketbanen. Solfylt dag med utsikt over havet."
      >
        <HeroContent>
          <PageTitle>Bilder fra feriekolonien</PageTitle>
        </HeroContent>
        <WaveDivider color="white" absolute />
      </HeroImage>
      <section className="mw7 center">
        <article className="bt bb b--black-10 flex flex-wrap justify-between pb4">
          {data.albums.map((album) => (
            <Link key={album.title} href={`/bilder/${album.title}`}>
              {/* eslint-disable-next-line */}
              <a className="no-underline black dim w-50 pa3">
                <div className="mb4 mb0-ns w-100">
                  <h1 className="f3 fw1 mt0 lh-title w-100">{album.title}</h1>
                  {album.coverImage && <SanityImage image={album.coverImage} />}
                </div>
              </a>
            </Link>
          ))}
        </article>
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
