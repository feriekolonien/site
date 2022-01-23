import SandSVG from './SandSVG';

const Footer = ({ className = '', showSand = false }) => (
  <footer className={className}>
    {showSand && (
      <>
        <img
          src="/static/img/crab.png"
          className="absolute right-10 bottom-6 md:right-40 md:bottom-20 z-20 scale-75 md:scale-100"
        />
        <img
          src="/static/img/chest.png"
          className="absolute right-100 bottom-0 md:right-80 md:bottom-10 z-20 scale-75 md:scale-100"
        />
      </>
    )}
    {showSand && <SandSVG />}
    <div
      className={['text-center py-3', showSand && 'text-yellow-700'].join(' ')}
    >
      <small className="relative z-10">
        <span className="">FILTVET FERIEKOLONI</span> {new Date().getFullYear()}
      </small>
    </div>
  </footer>
);

export default Footer;
