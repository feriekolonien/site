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
  <nav className="flex flex-col sm:flex-row mx-center bg-white max-w-6xl py-5 items-center mx-auto">
    <div className="mr-auto">
      <Link href="/">
        <a className="">
          <img
            src="/logo.png"
            className="w-40 inline-block"
            alt="Filtvet feriekoloni"
          />
        </a>
      </Link>
    </div>
    <div className="space-x-6">
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
