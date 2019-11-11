import { useRouter } from "next/router";

const Navigation = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <header className="sans-serif">
      <div
        className="cover bg-left bg-center-l"
        style={{
          backgroundImage: "url(/IMG_6409.jpg)"
        }}
      >
        <div className="bg-black-60 pb5 pb6-m pb7-l">
          <nav className="flex w-100 mw8 center">
            <div className="pa3 mr-auto">
              <a href="/" className="dib grow-large border-box">
                <img
                  src="/logo_hvit.png"
                  className="h3 w3"
                  alt="Filtvet feriekoloni"
                />
              </a>
            </div>
            <div className="tr pa3">
              <a
                className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                href="/historie"
                title="Historie"
              >
                Historie
              </a>
              <a
                className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                href="/kontakt"
                title="Kontakt"
              >
                Kontakt
              </a>
              <a
                className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba"
                href="/soknadsskjema"
                title="Søknadsskjema"
              >
                Søknadsskjema
              </a>
            </div>
          </nav>
          {children}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
