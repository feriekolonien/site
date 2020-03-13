import { useEffect, useState } from 'react';

const initialSize = {
  width: 900,
  height: 508,
};

function useYoutubeVideo(defaultSizes = initialSize) {
  const [windowSize, setWindowSize] = useState(defaultSizes);

  useEffect(() => {
    const aspectRatio = windowSize.height / windowSize.width;
    const width = Math.min(window.innerWidth, windowSize.width);
    setWindowSize({
      width,
      height: width * aspectRatio,
    });
  }, []);

  return {
    height: windowSize.height,
    width: windowSize.width,
    playerVars: {
      autoplay: 1,
    },
  };
}

export default useYoutubeVideo;
