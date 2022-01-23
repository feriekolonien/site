import React, { useState } from 'react';
import YouTube from 'react-youtube';

import PromoImage from './PromoImage';

const LandingPageVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  if (showVideo) {
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
      <button className="" onClick={() => setShowVideo(true)}>
        <PromoImage className="mb4" src="/static/poster.jpg" />
      </button>
    </div>
  );
};

export default LandingPageVideo;
