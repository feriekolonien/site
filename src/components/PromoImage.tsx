import Image from 'next/image';

type PromoImageProps = {
  className?: string;
  src: string;
};

const PromoImage = ({ src }: PromoImageProps) => (
  <Image
    src={src}
    alt="Cover"
    draggable="false"
    width={800}
    height={450}
    className="rounded-lg"
    unoptimized
  />
);

export default PromoImage;
