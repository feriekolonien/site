import { getImageSizes } from '../lib/sanity';

const SanityImage = ({ image }) => {
  const urls = getImageSizes(image);
  return <img src={urls.source.regular} className="db" alt="" />;
};

export default SanityImage;
