export const CTA = ({ children, subtext }) => {
  return (
    <>
      <style jsx>{`
        a {
          background-color: #fc9c0c;
          font-weight: bold;
        }
      `}</style>
      <a
        className="f2 grow no-underline br-pill ph5 pv2 mb2 dib white"
        href="/soknadsskjema">
        {children}
      </a>
      {subtext && <span className="fw1 f4 mt3 mb4 lh-title db">{subtext}</span>}
    </>
  );
};
