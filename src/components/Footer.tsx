import SandSVG from './SandSVG';

const Footer = ({ className = '' }) => (
  <footer className={className}>
    <SandSVG />
    <div className="text-center pb-3 text-yellow-700">
      <small className="relative z-10">
        <span className="">FILTVET FERIEKOLONI</span> {new Date().getFullYear()}
      </small>
    </div>
  </footer>
);

export default Footer;
