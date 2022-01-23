import SandSVG from './SandSVG';

const Footer = ({ className = '', showSand = false }) => (
  <footer className={className}>
    {showSand && (
      <img
        src="/static/img/crab.png"
        className="absolute right-10 bottom-10 md:right-40 md:bottom-20 z-20"
      />
    )}
    {showSand && <SandSVG />}
    <div className="text-center pb-3 text-yellow-700">
      <small className="relative z-10">
        <span className="">FILTVET FERIEKOLONI</span> {new Date().getFullYear()}
      </small>
    </div>
  </footer>
);

export default Footer;
