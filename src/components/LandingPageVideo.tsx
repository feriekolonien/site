import React, { useState } from 'react';
import YouTube from 'react-youtube';

import PromoImage from './PromoImage';

const LandingPageVideo = () => {
  const [openModal, setOpenModal] = useState(false);

  if (openModal) {
    return (
      <div className="flex justify-center">
        <YouTube
          videoId="UzQcTkygO8Q"
          opts={{
            height: '225',
            width: '400',
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </div>
    );
  }

  return (
    <div>
      <PromoImage
        className="mb4"
        src="/static/poster.jpg"
        onClick={() => setOpenModal(true)}
      />
    </div>
  );
};

export default LandingPageVideo;
