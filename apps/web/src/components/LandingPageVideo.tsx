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
        className="relative mb-4 flex items-center justify-center rounded-lg shadow-2xl ring-8 ring-white"
        onClick={() => setShowVideo(true)}
      >
        <PromoImage src="/static/poster.jpg" />
        <div
          className={[
            'absolute',
            'h-16 w-16 rounded-full	',
            'transition-all duration-150',
            'rounded-full bg-gradient-to-tr from-[#FC9C0C] to-[#FFD930] text-[#332A00]',
            'active:bg-yellow-400 active:bg-blend-multiply group-hover:bg-yellow-300 group-hover:bg-blend-multiply',
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
