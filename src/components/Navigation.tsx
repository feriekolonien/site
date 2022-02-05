import Link from 'next/link';
import { ButtonLink } from './Button';

const NavLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link href={href}>
    <a
      className={['font-bold hover:cursor-pointer hover:text-slate-500'].join(
        ' ',
      )}
    >
      {children}
    </a>
  </Link>
);

type NavigationProps = {};

const Navigation = ({}: NavigationProps) => (
  <nav className="mx-center mx-auto flex max-w-6xl flex-col bg-white py-5 sm:flex-row md:items-center">
    <div className="mr-auto flex w-full sm:w-auto">
      <Link href="/">
        <a className="mr-auto">
          <img
            src="/logo.png"
            className="inline-block w-40"
            alt="Filtvet feriekoloni"
          />
        </a>
      </Link>
      <ButtonLink href="/soknadsskjema" className="mr-3 sm:hidden">
        Søk nå
      </ButtonLink>
    </div>
    <div className="mx-3 mt-4 space-x-6 text-slate-900 sm:mt-0">
      <NavLink href="/om-oss">Om oss</NavLink>
      <NavLink href="/bilder">Bilder</NavLink>
      <NavLink href="/historien">Historien</NavLink>
      <NavLink href="/kontakt">Kontakt</NavLink>
      <ButtonLink href="/soknadsskjema" className="hidden sm:inline-block">
        Søk nå
      </ButtonLink>
    </div>
  </nav>
);

export default Navigation;
