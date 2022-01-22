import Link from 'next/link';

const NavLink = ({
  children,
  href,
  color,
}: {
  children: React.ReactNode;
  href: string;
  color: string;
}) => (
  <Link href={href}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a
      className={[
        `f5 fw6 hover-${color}`,
        'no-underline',
        `${color}`,
        'dib-ns',
        'tracked-tight',
        'dim',
      ].join(' ')}
    >
      {children}
    </a>
  </Link>
);

const Navigation = ({ color = 'blue-dark' }) => (
  <nav className="flex w-100 center flex-row-ns flex-column bg-white">
    <div className="pa3 mr-auto-ns">
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="dib border-box">
          <style jsx>
            {`
              @media screen and (min-width: 30em) {
                img {
                  width: 10rem;
                }
              }
            `}
          </style>
          <img
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

export default Navigation;
