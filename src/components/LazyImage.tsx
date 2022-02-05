import * as React from 'react';
// import useNativeLazyLoading from '@charlietango/use-native-lazy-loading';
import { useInView } from 'react-intersection-observer';

const LazyImage = ({
  src,
  crossOrigin,
  ...rest
}: React.HTMLProps<HTMLImageElement>) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <img {...rest} ref={ref} src={inView ? src : undefined} loading="lazy" />
  );
};

export default LazyImage;
