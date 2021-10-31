import Image from 'next/image';

export const PageLead = ({ children }: { children: React.ReactNode }) => (
  <div className="fw1 f4 white-80 mt3 mb4 lh-title">{children}</div>
);

export const HeroContent = ({ children }: { children: React.ReactNode }) => (
  <div className="">{children}</div>
);

export const HeroImage = ({
  children,
  src,
  className = 'bg-black-40  relative',
  alt,
}: {
  children: React.ReactNode;
  src: string;
  alt: string;
  className?: string;
}) => {
  const height = '400px';
  return (
    <div style={{ height }} className="relative flex tc">
      <div
        style={{ height, filter: 'blur(1px)' }}
        className="absolute w-100 z--1"
      >
        <Image
          quality="90"
          layout="fill"
          objectFit="cover"
          src={src}
          alt={alt}
          priority
        />
      </div>
      <div className={`${className} flex flex-column w-100`}>{children}</div>
    </div>
  );
};
