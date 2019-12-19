import React from 'react';
import Page from '../../components/Page';
import {
  HeroImage,
  HeroContent,
  PageTitle,
} from '../../components/PageComponents';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';


const Gallery = () => {
  console.log('GalleryPage says hi');
  return (
    <Page title="Bilder">
      <HeroImage>
        <Navigation />
        <HeroContent>
          <PageTitle>Bilder fra feriekolonien</PageTitle>
        </HeroContent>
      </HeroImage>
      <HeroContent>
        <Link href="/bilder/2019">2019</Link>
      </HeroContent>
      <Footer />
    </Page>
  );
};

export default Gallery;
