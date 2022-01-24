type PromoImageProps = {
  className?: string;
  src: string;
};

const PromoImage = ({ className, src }: PromoImageProps) => (
  <img
    src={src}
    alt="Cover"
    draggable="false"
    className={['shadow-2xl rounded-lg', className].join(' ')}
  />
);

export default PromoImage;
