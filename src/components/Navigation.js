import Link from "next/link";

const NavLink = ({ children, ...rest }) => {
  return (
    <Link {...rest}>
      <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3">
        {children}
      </a>
    </Link>
  );
};

const Navigation = ({ children }) => {
  return (
    <nav className="flex w-100 mw8 center">
      <div className="pa3 mr-auto">
        <Link href="/">
          <a className="dib grow-large border-box">
            <img
              src="/logo_hvit.png"
              className="h3 w3"
              alt="Filtvet feriekoloni"
            />
          </a>
        </Link>
      </div>
      <div className="tr pa3">
        <NavLink href="/historie">Historie</NavLink>
        <NavLink href="/kontakt">Kontakt</NavLink>
        <NavLink href="/soknadsskjema">Søknadsskjema</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
