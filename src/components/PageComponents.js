// @flow
export const CTA = ({ children }) => {
  return (
    <a
      className="f4 no-underline grow dib v-mid white ba ph3 pv2 mb3"
      href="/soknadsskjema"
    >
      {children}
    </a>
  );
};

export const PageTitle = ({ children, color = "white-90" }) => {
  return <h1 className={`f2 f1-l fw2 mb0 lh-title ${color}`}>{children}</h1>;
};

export const PageLead = ({ children }) => {
  return <p className="fw1 f3 white-80 mt3 mb4 lh-title">{children}</p>;
};

export const HeroContent = ({ children }) => {
  return <div className="tc-l mt4 mt5-m mt6-l ph3 mw8 center">{children}</div>;
};

export const Text = ({ children }) => {
  return <p className="fw3 lh-copy">{children}</p>;
};

export const PageContent = ({ children, article = false }) => {
  return (
    <section
      className={`mw8 center f4 relative ${article ? "nt6-l bg-white" : ""}`}
    >
      {article && (
        <div
          className="absolute w-100"
          style={{
            height: "12rem",
            boxShadow: "0px -20px 13px 6px rgba(0,0,0,0.2)"
          }}
        />
      )}
      <div className="measure center ph3 pt4">{children}</div>
    </section>
  );
};

export const HeroImage = ({ children }) => {
  return (
    <div
      className="cover bg-left bg-center-l"
      style={{
        backgroundImage: "url(/IMG_6409.jpg)"
      }}
    >
      <div className="bg-black-60 pb5 pb6-m pb7-l">{children}</div>
    </div>
  );
};
