import Image from 'next/image';
import Link from 'next/link';

const NavLink = ({ children, href, color }) => {
  return (
    <Link href={href}>
      <a
        className={`f5 fw6 hover-${color} no-underline ${color} dib-ns tracked-tight dim`}>
        {children}
      </a>
    </Link>
  );
};

const Navigation = ({ color = 'blue-dark' }) => {
  return (
    <nav className="flex w-100 center flex-row-ns flex-column bg-white">
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
            <Image
              width="164"
              height="40"
              src="/logo.png"
              className="w-50 w4-ns"
              alt="Filtvet feriekoloni"
            />
          </a>
        </Link>
      </div>
      <div className="pa3 flex justify-between w-100 w-60-ns w-40-l ph4-l items-center">
        <NavLink color={color} href="/om-oss">
          Om oss
        </NavLink>
        <NavLink color={color} href="/bilder">
          Bilder
        </NavLink>
        <NavLink color={color} href="/historien">
          Historien
        </NavLink>
        <NavLink color={color} href="/kontakt">
          Kontakt
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
