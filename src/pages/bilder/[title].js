import React, { useCallback, useState } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import Page from '../../components/Page';
import {
  HeroImage,
  HeroContent,
  PageTitle,
} from '../../components/PageComponents';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { fetchSingleAlbum, getImageSizes } from '../../lib/sanity';
import RenderInBrowser from '../../components/RenderInBrowser';

// eslint-disable-next-line react/prop-types
const AlbumPage = ({ album = { images: [] } }) => {
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

  return (
    <Page title={album.title}>
      <HeroImage>
        <Navigation />
        <HeroContent>
          <PageTitle>Dette er et album: {album.title} </PageTitle>
        </HeroContent>
      </HeroImage>
      <RenderInBrowser>
        <Gallery
          onClick={openLightbox}
          photos={album.images.map(img => ({
            src: img.source.thumbnail,
            height: 1,
            width: img.aspectRatio,
          }))}
        />
      </RenderInBrowser>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel currentIndex={currentImage} views={album.images} />
          </Modal>
        ) : null}
      </ModalGateway>

      <Footer />
    </Page>
  );
};

AlbumPage.getInitialProps = async context => {
  const album = await fetchSingleAlbum(context.query.title);
  const { images = [] } = album;
  return {
    album: {
      ...album,
      images: images.map(img => getImageSizes(img)),
    },
  };
};

export default AlbumPage;
