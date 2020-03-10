import Link from 'next/link';

const FooterLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className="f6 dib ph2 link mid-gray dim">{children}</a>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
      <small className="f6 db tc">
        <span className="ttu">FILTVET FERIEKOLONI</span>{' '}
        {new Date().getFullYear()}
      </small>
      <div className="tc mt3">
        <FooterLink href="/">Hjem</FooterLink>
        <FooterLink href="/om-oss">Om oss</FooterLink>
        <FooterLink href="/kontakt">Kontakt</FooterLink>
        <FooterLink href="/soknadsskjema">Søknadsskjema</FooterLink>
      </div>
    </footer>
  );
};

export default Footer;
