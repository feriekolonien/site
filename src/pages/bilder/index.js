import React from 'react';
import useSWR from 'swr';
import Link from 'next/link';

import Page from '../../components/Page';
import {
  HeroImage,
  HeroContent,
  PageTitle,
} from '../../components/PageComponents';
import Navigation from '../../components/Navigation';
import WaveDivider from '../../components/WaveDivider';
import Footer from '../../components/Footer';
import { fetchSanityDocument } from '../../lib/sanity';
import SanityImage from '../../components/SanityImage';

const evenOddClasses = (number, classes) => {
  const isEven = number % 2;
  if (isEven) {
    return classes[0];
  }
  return classes[1];
};

const AlbumList = () => {
  const { data, error } = useSWR(
    /* groq */ `*[_type == "album"]
    {title, coverImage {asset -> {...}}}`,
    fetchSanityDocument,
  );

  return (
    <Page title="Bilder">
      <HeroImage>
        <Navigation />
        <HeroContent>
          <PageTitle>Bilder fra feriekolonien</PageTitle>
        </HeroContent>
        <WaveDivider color="white" />
      </HeroImage>

      {error && <div>Kunne ikke hente album</div>}
      {!data && <div>Laster album...</div>}

      <section className="mw7 center">
        <article className="bt bb b--black-10 flex flex-wrap justify-between">
          {data &&
            data.map((album, index) => (
              <Link key={album.title} href={`/bilder/${album.title}`}>
                {/* eslint-disable-next-line */}
                <a className="no-underline black dim w-50 pa3">
                  <div className="mb4 mb0-ns w-100">
                    <h1 className="f3 fw1 mt0 lh-title w-100">{album.title}</h1>
                    <SanityImage image={album.coverImage} />
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

export default AlbumList;
