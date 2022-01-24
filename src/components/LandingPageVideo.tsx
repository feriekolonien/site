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
    <div className="group">
      <button
        className="relative ring-8 rounded-lg ring-white"
        onClick={() => setShowVideo(true)}
      >
        <PromoImage className="mb4" src="/static/poster.jpg" />
        <div
          className={[
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
            'w-16 h-16 rounded-full	',
            'transition-all duration-150',
            'rounded-full text-[#332A00] bg-gradient-to-tr from-[#FC9C0C] to-[#FFD930]',
            'group-hover:bg-yellow-300 group-hover:bg-blend-multiply active:bg-blend-multiply active:bg-yellow-400',
          ].join(' ')}
        >
          <svg
            width="63"
            height="63"
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.8526 29.8899C46.1874 30.6484 46.2052 32.5659 44.8847 33.349L26.1463 44.462C24.8131 45.2526 23.1261 44.2918 23.1261 42.7417L23.1261 20.9811C23.1261 19.4476 24.7809 18.4846 26.1142 19.2422L44.8526 29.8899Z"
              fill="white"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default LandingPageVideo;
