import Head from "next/head";
import Navigation from "../components/Navigation";
import { HeroImage, HeroContent } from "../components/PageComponents";

const Page = ({ children, title = "Feriekolonien" }) => {
  return (
    <div className="sans-serif">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons/css/tachyons.min.css"
        />
      </Head>
      {children}
    </div>
  );
};

export default Page;
