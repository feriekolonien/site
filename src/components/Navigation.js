import Link from "next/link";

const NavLink = ({ children, color, ...rest }) => {
  return (
    <Link {...rest}>
      <a
        className={`f6 fw4 hover-${color} no-underline ${color}-70 dn dib-ns pv2 ph3`}
      >
        {children}
      </a>
    </Link>
  );
};

const Navigation = ({ children, color = "white" }) => {
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
        <NavLink color={color} href="/om-oss">
          Om oss
        </NavLink>
        <NavLink color={color} href="/info">
          Praktisk informasjon
        </NavLink>
        <NavLink color={color} href="/kontakt">
          Kontakt
        </NavLink>
        <NavLink color={color} href="/soknadsskjema">
          Søknadsskjema
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
