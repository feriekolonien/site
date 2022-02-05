import Image from 'next/image';

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#eff1f3" offset="0%" />
      <stop stop-color="#e2e2e2" offset="50%" />
      <stop stop-color="#eff1f3" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#eff1f3" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

type LazyImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  crossOrigin?: never;
} & React.HTMLProps<HTMLImageElement>;
const LazyImage = ({ alt, width, height, ...rest }: LazyImageProps) => {
  return (
    <Image
      {...rest}
      width={width}
      height={height}
      alt={alt}
      loading="lazy"
      placeholder="blur"
      unoptimized
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        shimmer(width, height),
      )}`}
    />
  );
};

export default LazyImage;
