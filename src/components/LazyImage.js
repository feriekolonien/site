import React from 'react';
// import useNativeLazyLoading from '@charlietango/use-native-lazy-loading';
import { useInView } from 'react-intersection-observer';

const LazyImage = ({ width, height, src, ...rest }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <img
      {...rest}
      ref={ref}
      src={inView ? src : undefined}
      width={width}
      height={height}
      loading="lazy"
    />
  );
};

export default LazyImage;
