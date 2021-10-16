import Image from 'next/image';

const shadowColor = 'rgba(13, 42, 78, 0.24)';

const PromoImage = ({ ...rest }) => (
  <>
    <style jsx>
      {`
        img {
          border-radius: 10px;
          box-shadow: 0 1px 2px ${shadowColor}, 0 2px 4px ${shadowColor},
            0 4px 8px ${shadowColor}, 0 8px 16px ${shadowColor},
            0 16px 32px ${shadowColor};
          transition: all 80ms ease-in;
        }
        img:active,
        img:hover {
          box-shadow: 0 1px 2px ${shadowColor}, 0 2px 4px ${shadowColor},
            0 4px 8px ${shadowColor}, 0 8px 16px ${shadowColor};
          transition: all 80ms ease-in;
        }
      `}
    </style>
    <Image alt="Cover image" draggable="false" {...rest} />
  </>
);

export default PromoImage;
