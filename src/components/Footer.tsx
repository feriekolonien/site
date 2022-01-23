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

const Footer = ({ className = '', showSand = false }) => {
  const color = showSand ? 'text-yellow-700' : 'text-slate-800';
  return (
    <footer className={className}>
      {showSand && (
        <>
          <img
            src="/static/img/crab.png"
            className="absolute right-0 bottom-6 md:right-20 md:bottom-20 z-20 scale-75 md:scale-100"
          />
          <img
            src="/static/img/chest.png"
            className={[
              'absolute left-5 bottom-5 lg:left-auto lg:right-60 md:bottom-10 z-20 scale-x-[-1]',
              'w-28 md:w-auto',
            ].join(' ')}
          />
        </>
      )}
      {showSand && <SandSVG />}
      <div className={['text-center py-3', color].join(' ')}>
        <ul
          className={[
            'text-2xl relative z-10 flex justify-center space-x-3 mb-1',
            color,
          ].join(' ')}
        >
          {socialLinks.map((el) => (
            <li key={el.href}>
              <a href={el.href} target="_blank">
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
