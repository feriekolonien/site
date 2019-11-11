import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Page = ({
  children,
  title = "Filtvet feriekoloni",
  subtitle = "",
  cta = false
}) => {
  return (
    <div className="sans-serif">
      <Head>
        <title>{title} | Feriekolonien</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons/css/tachyons.min.css"
        />
      </Head>
      <Navigation>
        <div className="tc-l mt4 mt5-m mt6-l ph3 mw8 center">
          <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">{title}</h1>
          <h2 className="fw1 f3 white-80 mt3 mb4 lh-title">{subtitle}</h2>
          {cta && (
            <a
              className="f4 no-underline grow dib v-mid white ba ph3 pv2 mb3"
              href="/soknadsskjema"
            >
              Søknadsskjema
            </a>
          )}{" "}
        </div>
      </Navigation>
      {children}
      <Footer />
    </div>
  );
};

export default Page;
