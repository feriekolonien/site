const shadowColor = 'rgba(13, 42, 78, 0.24)';

type PromoImageProps = {
  className?: string;
  src: string;
};

const PromoImage = ({ className, src }: PromoImageProps) => (
  <img
    src={src}
    alt="Cover"
    draggable="false"
    className={[
      'shadow-2xl active:shadow-sm hover:shadow-sm transition-shadow ring-8 rounded-lg ring-white',
      className,
    ].join(' ')}
  />
);

export default PromoImage;
