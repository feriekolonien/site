import { getImageSizes } from '../lib/sanity';
import PromoImage from './PromoImage';

const SanityImage = ({ image }: { image: Sanity.ImageObject }) => {
  const urls = getImageSizes(image);
  return <PromoImage src={urls.source.regular} className="db" alt="" />;
};

export default SanityImage;
