const Footer = ({ children }) => {
  const footerClasses = "f6 dib ph2 link mid-gray dim";

  return (
    <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
      <small className="f6 db tc">
        <span className="ttu">FILTVET FERIEKOLONI</span>{" "}
        {new Date().getFullYear()}
      </small>
      <div className="tc mt3">
        <a className={footerClasses} href="/">
          Hjem
        </a>
        <a className={footerClasses} href="/om">
          Om oss
        </a>
        <a className={footerClasses} href="/historie">
          Historien
        </a>
        <a className={footerClasses} href="/galleri">
          Galleri
        </a>
        <a className={footerClasses} href="/kontakt">
          Kontakt
        </a>
        <a className={footerClasses} href="/soknadsskjema">
          Søknadsskjema
        </a>
      </div>
    </footer>
  );
};

export default Footer;
