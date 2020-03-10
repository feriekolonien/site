import Link from 'next/link';

const NavLink = ({ children, href, color }) => {
  return (
    <Link href={href}>
      <a
        className={`f5 fw5 hover-${color} no-underline ${color} dn dib-ns pv2 ph3`}>
        {children}
      </a>
    </Link>
  );
};

const Navigation = ({ color = 'white' }) => {
  return (
    <nav className="flex w-100 mw8 center">
      <div className="pa3 mr-auto">
        <Link href="/">
          <a className="dib grow-large border-box">
            <img src="/logo.png" className="w5" alt="Filtvet feriekoloni" />
          </a>
        </Link>
      </div>
      <div className="tr pa3">
        <NavLink color={color} href="/om-oss">
          Om oss
        </NavLink>
        <NavLink color={color} href="/bilder">
          Bilder
        </NavLink>
        <NavLink color={color} href="/kontakt">
          Kontakt
        </NavLink>
        <NavLink color={color} href="/soknadsskjema">
          Søk her
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
