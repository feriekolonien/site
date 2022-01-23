import Link from 'next/link';
import Button from './Button';

const NavLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link href={href}>
    <a
      className={['hover:text-slate-500 hover:cursor-pointer font-bold'].join(
        ' ',
      )}
    >
      {children}
    </a>
  </Link>
);

type NavigationProps = {};

const Navigation = ({}: NavigationProps) => (
  <nav className="flex flex-col sm:flex-row mx-center bg-white max-w-6xl py-5 md:items-center mx-auto">
    <div className="w-full sm:w-auto flex mr-auto">
      <Link href="/">
        <a className="mr-auto">
          <img
            src="/logo.png"
            className="w-40 inline-block"
            alt="Filtvet feriekoloni"
          />
        </a>
      </Link>
      <Button className="sm:hidden">Søk nå</Button>
    </div>
    <div className="ml-3 space-x-6 mt-4 sm:mt-0 text-slate-900">
      <NavLink href="/om-oss">Om oss</NavLink>
      <NavLink href="/bilder">Bilder</NavLink>
      <NavLink href="/historien">Historien</NavLink>
      <NavLink href="/kontakt">Kontakt</NavLink>
      <Button className="hidden sm:inline-block">Søk nå</Button>
    </div>
  </nav>
);

export default Navigation;
