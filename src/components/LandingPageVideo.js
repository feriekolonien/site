import React, { useState, useCallback, forwardRef } from 'react';
import YouTube from 'react-youtube';
import { ModalGateway, Modal } from 'react-images/lib';

import useOnClickOutside from './useOnClickOutside';
import useYoutubeVideo from './useYoutubeVideo';
import VideoPoster from './VideoPoster';

const LandingPageVideo = () => {
  const [openModal, setOpenModal] = useState(false);
  const ref = useOnClickOutside(
    useCallback(() => setOpenModal(false), [setOpenModal]),
  );
  const videoOptions = useYoutubeVideo();

  return (
    <div>
      <VideoPoster
        className="mb4"
        src="/static/poster.jpg"
        onClick={() => setOpenModal(true)}
      />

      <ModalGateway>
        {openModal && (
          <Modal
            allowFullscreen={false}
            closeOnBackdropClick={false}
            onClose={() => setOpenModal(false)}>
            <VideoWrapper ref={ref}>
              <YouTube videoId="UzQcTkygO8Q" opts={videoOptions} />
            </VideoWrapper>
          </Modal>
        )}
      </ModalGateway>
    </div>
  );
};

const VideoWrapper = forwardRef(({ children }, ref) => {
  /**
   * Because we're hacking the Modal,
   * this wapper avoids extra props to be passed to children
   */
  return (
    <div className="flex justify-center">
      <div ref={ref}>{children}</div>
    </div>
  );
});

VideoWrapper.displayName = 'VideoWrapper';

export default LandingPageVideo;
