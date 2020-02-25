import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import Page from '../../components/Page';
import {
  HeroImage,
  HeroContent,
  PageTitle,
} from '../../components/PageComponents';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { fetchAlbums } from '../../lib/sanity';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // TODO: Move this to server side (i.e. AlbumList.getInitialProps())
    async function doFetch() {
      const sanityAlbums = await fetchAlbums();
      setAlbums(sanityAlbums);
    }
    doFetch();
  }, []);
  return (
    <Page title="Bilder">
      <HeroImage>
        <Navigation />
        <HeroContent>
          <PageTitle>Bilder fra feriekolonien</PageTitle>
        </HeroContent>
      </HeroImage>
      <HeroContent>
        {albums.map(el => (
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
