import colors from '../styles/colors';

const Banner = ({ children }) => {
  return (
    <>
      <style jsx>{`
        .banner {
          color: ${colors.darkBlue};
          background-color: ${colors.peach};
        }
        a {
          color: ${colors.darkBlue};
        }
      `}</style>
      <div className="w-100 banner tc f4 pv2 b">{children}</div>
    </>
  );
};

export default Banner;
