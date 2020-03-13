import Link from 'next/link';

const NavLink = ({ children, href, color }) => {
  return (
    <Link href={href}>
      <a
        className={`f5 fw5 hover-${color} no-underline ${color} dib-ns pv2 ph3`}>
        {children}
      </a>
    </Link>
  );
};

const Navigation = ({ color = 'white' }) => {
  return (
    <nav className="flex w-100 mw8 center flex-row-ns flex-column">
      <div className="pa3 mr-auto-ns">
        <Link href="/">
          <a className="dib grow-large border-box">
            <style jsx>{`
              @media screen and (min-width: 30em) {
                img {
                  width: 10rem;
                }
              }
            `}</style>
            <img
              src="/logo.png"
              className="w-50 w4-ns"
              alt="Filtvet feriekoloni"
            />
          </a>
        </Link>
      </div>
      <div className="tr-ns pa3">
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
