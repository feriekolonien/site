import Link from 'next/link';

const FooterLink = ({ children, color, ...rest }) => {
  return (
    <Link {...rest}>
      <a className={`f6 dib ph2 link ${color} dim`}>{children}</a>
    </Link>
  );
};

const Footer = ({ children, bgColor = "white", color="mid-gray" }) => {
  return (
    <footer
      style={{ backgroundColor: bgColor }}
      className={`pv4 ph3 ph5-m ph6-l ${color}`}>
      <small className="f6 db tc">
        <span className="ttu">FILTVET FERIEKOLONI</span>{' '}
        {new Date().getFullYear()}
      </small>
      <div className="tc mt3">
        <FooterLink color="white" href="/">Hjem</FooterLink>
        <FooterLink color="white" href="/om-oss">Om oss</FooterLink>
        <FooterLink color="white" href="/kontakt">Kontakt</FooterLink>
        <FooterLink color="white" href="/soknadsskjema">Søknadsskjema</FooterLink>
      </div>
    </footer>
  );
};

export default Footer;
