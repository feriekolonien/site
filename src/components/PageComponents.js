import { localize } from 'pseudo-localization';

import colors from '../styles/colors';

export const CTA = ({ children }) => {
  return (
    <>
      <style jsx>{`
        a {
          background-color: #fc9c0c;
          font-weight: bold;
        }
      `}</style>
      <a
        className="f2 grow no-underline br-pill ph5 pv2 mb2 dib white"
        href="/soknadsskjema">
        {children}
      </a>
    </>
  );
};

export const PageTitle = ({ children, color = 'white-90' }) => {
  return <h1 className={`f3 f2-l fw2 mb0 lh-title ${color}`}>{children}</h1>;
};

export const PageLead = ({ children }) => {
  return <div className="fw1 f4 white-80 mt3 mb4 lh-title">{children}</div>;
};

export const HeroContent = ({ children }) => {
  return (
    <div className="tc-l mt4 mt5-m mt4-l ph3 mw8 center flex">{children}</div>
  );
};

export const Text = ({ children, pseudo = false }) => {
  if (pseudo && typeof children === 'string') {
    return <p className="fw3 lh-copy">{localize(children)}</p>;
  }
  return <p className="fw3 lh-copy">{children}</p>;
};

export const PageContent = ({
  children,
  bgColor = 'white',
  color = colors.darkBlue,
}) => {
  return (
    <section
      style={{ backgroundColor: bgColor }}
      className={`${color} center relative`}>
      <div className="measure center ph3 pt4 pb4">{children}</div>
    </section>
  );
};

export const HeroImage = ({
  children,
  imageUrl = '/static/img/IMG_6409.jpg',
  className = 'bg-black-60  relative',
}) => {
  return (
    <div
      className="cover bg-left bg-center-l"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}>
      <div className={className}>{children}</div>
    </div>
  );
};

export const FixedBackground = ({
  children,
  imageUrl = '/static/img/IMG_6409.jpg',
  className = 'bg-black-60 pb5 pb6-m pb7-l',
}) => {
  return (
    <div
      className="cf"
      style={{
        background: `url(${imageUrl}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      }}>
      <div className={className}>{children}</div>
    </div>
  );
};
