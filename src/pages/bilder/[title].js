import React, { useCallback, useState } from 'react';
import useSWR from 'swr';
import Gallery from 'react-photo-gallery';
import { useRouter } from 'next/router';

import Carousel, { Modal, ModalGateway } from 'react-images';

import Page from '../../components/Page';
import {
  HeroImage,
  HeroContent,
  PageTitle,
} from '../../components/PageComponents';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { fetchSanityDocument, getImageSizes } from '../../lib/sanity';
import RenderInBrowser from '../../components/RenderInBrowser';

// eslint-disable-next-line react/prop-types
const AlbumPage = () => {
  const router = useRouter();
  const { title = '' } = router.query;
  const { data, error } = useSWR(
    /* groq */ `
    *[_type == "album" && title == "${title}"]
     {title, "images": images[]{asset->{...}}}[0]
    `,
    fetchSanityDocument,
  );

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const images = (data && data.images.map(getImageSizes)) || [];
  const albumTitle = (data && data.title) || '';

  return (
    <Page title={`Album: ${albumTitle}`}>
      <HeroImage>
        <Navigation />
        <HeroContent>
          <PageTitle>Dette er et album: {albumTitle} </PageTitle>
        </HeroContent>
      </HeroImage>
      <RenderInBrowser>
        <div className="mw8 center">
          {data && (
            <Gallery
              onClick={openLightbox}
              photos={images.map(img => ({
                src: img.source.thumbnail,
                height: 1,
                width: img.aspectRatio,
              }))}
            />
          )}
          {!data && 'Laster...'}
          {error && <div>Det har skjedd en feil</div>}
        </div>
      </RenderInBrowser>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel currentIndex={currentImage} views={images} />
          </Modal>
        ) : null}
      </ModalGateway>

      <Footer />
    </Page>
  );
};

export default AlbumPage;
