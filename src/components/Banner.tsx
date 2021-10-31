const Banner = ({ children }) => (
  <>
    <style jsx>
      {`
        a {
          color: var(--dark-blue-1);
        }
      `}
    </style>
    <div className="w-100 blue-1 bg-blue-7 tc f4 pv2 b">{children}</div>
  </>
);

export default Banner;
