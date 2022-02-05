type PromoImageProps = {
  className?: string;
  src: string;
};

const PromoImage = ({ className, src }: PromoImageProps) => (
  <img
    src={src}
    alt="Cover"
    draggable="false"
    className={['rounded-lg shadow-2xl', className].join(' ')}
  />
);

export default PromoImage;
