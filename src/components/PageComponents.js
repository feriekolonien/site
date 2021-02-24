export const PageLead = ({ children }) => {
  return <div className="fw1 f4 white-80 mt3 mb4 lh-title">{children}</div>;
};

export const HeroContent = ({ children }) => {
  return (
    <div className="tc-l mt4 mt5-m mt4-l ph3 mw8 center flex">{children}</div>
  );
};

export const HeroImage = ({
  children,
  imageUrl = '/static/img/IMG_6409.jpg',
  className = 'bg-black-40  relative',
}) => {
  return (
    <div
      className="cover bg-left bg-center-l"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}>
      <div
        style={{ minHeight: '50vh' }}
        className={`${className} flex flex-column`}>
        {children}
      </div>
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
