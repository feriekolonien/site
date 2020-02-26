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
import Footer from '../../components/Footer';
import { fetchSanityDocument } from '../../lib/sanity';

const AlbumList = () => {
  const { data, error } = useSWR(
    /* groq */ `*[_type == "album"]
    {title, "coverPhoto": images[0]{asset -> {...}}}`,
    fetchSanityDocument,
  );

  return (
    <Page title="Bilder">
      <HeroImage>
        <Navigation />
        <HeroContent>
          <PageTitle>Bilder fra feriekolonien</PageTitle>
        </HeroContent>
      </HeroImage>
      <HeroContent>
        {error && <div>Kunne ikke hente album</div>}
        {!data && <div>Laster album...</div>}
        {data &&
          data.map(el => (
            <Link key={el.title} href={`/bilder/${el.title}`}>
              {/* eslint-disable-next-line */}
              <a className="db f1">{el.title}</a>
            </Link>
          ))}
      </HeroContent>
      <Footer />
    </Page>
  );
};

export default AlbumList;
