import * as React from 'react';
// import useNativeLazyLoading from '@charlietango/use-native-lazy-loading';
import { useInView } from 'react-intersection-observer';

type LazyImageProps = {
  src: string;
  alt: string;
} & React.HTMLProps<HTMLImageElement>;
const LazyImage = ({ src, alt, crossOrigin, ...rest }: LazyImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <img
      {...rest}
      alt={alt}
      ref={ref}
      src={inView ? src : undefined}
      loading="lazy"
    />
  );
};

export default LazyImage;
