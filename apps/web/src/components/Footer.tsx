import Image from 'next/image';
import { RiFacebookFill, RiInstagramLine } from 'react-icons/ri';
import SandSVG from './SandSVG';

const socialLinks = [
  {
    href: 'https://www.instagram.com/feriekolonien/?utm_source=feriekolonien.no&utm_campaign=footer',
    icon: RiInstagramLine,
  },
  {
    href: 'https://www.facebook.com/filtvetferiekoloni?utm_source=feriekolonien.no&utm_campaign=footer',
    icon: RiFacebookFill,
  },
];

type FooterProps = {
  className?: string;
  showSand?: boolean;
};

const Footer = ({ className = '', showSand = false }: FooterProps) => {
  const color = showSand ? 'text-yellow-700' : 'text-slate-800';
  return (
    <footer className={className}>
      {showSand && (
        <>
          <span className="absolute right-0 bottom-6 z-20 scale-75 md:right-20 md:bottom-20 md:scale-100">
            <Image
              alt="Illustrasjon av en krabbe på bunnen av havet"
              src="/static/img/crab.png"
              width={111}
              height={56}
              unoptimized
            />
          </span>
          <span className="absolute left-5 bottom-5 z-20 w-28 scale-x-[-1] md:bottom-10 md:w-auto lg:left-auto lg:right-60">
            <Image
              alt="Ved siden av krabben står det en skattekiste"
              width={157}
              height={148}
              src="/static/img/chest.png"
              unoptimized
            />
          </span>
        </>
      )}
      {showSand && <SandSVG />}
      <div className={['py-3 text-center', color].join(' ')}>
        <ul
          className={[
            'relative z-10 mb-1 flex justify-center space-x-3 text-2xl',
            color,
          ].join(' ')}
        >
          {socialLinks.map((el) => (
            <li key={el.href}>
              <a href={el.href} target="_blank" rel="noreferrer">
                <el.icon />
              </a>
            </li>
          ))}
        </ul>
        <p className="relative z-10 text-sm font-semibold">
          <span className="uppercase">Filtvet Feriekoloni</span>{' '}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
