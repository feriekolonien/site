import Image from 'next/image';
import CampDates from '../components/CampDates';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import LandingPageVideo from '../components/LandingPageVideo';
import Navigation from '../components/Navigation';
import Page from '../components/Page';
import WaveDivider from '../components/WaveDivider';

function HomePage() {
  return (
    <Page>
      <Navigation />
      <div className="mt3 mt5-m mt4-l ph3 mw8 center flex flex-column-reverse flex-row-ns">
        <div className="w-100 mb4">
          <img
            className="db-ns w5 w-auto-ns"
            src="/static/img/logo.png"
            width="500"
            height="680"
            alt="Kolomåke"
          />
        </div>
        <div className="ml4-l blue-0">
          <style jsx>
            {`
              p,
              ul > li {
                line-height: 1.5;
              }
            `}
          </style>
          <h1 className="mb0 lh-title f1-ns">
            Sommerferie på <span className="nowrap">Filtvet Feriekoloni</span>
          </h1>
          <div className="fw1 f4 white-80 mt3 mb4 lh-title blue-0">
            <p>
              Trefoldighet Feriekoloni er Norges eldste aktive feriekoloni –
              eller sommerleir <span className="nowrap">om du vil</span>!
            </p>
            <p>I over 130 år har barn og unge vært på ferie hos oss.</p>
          </div>
          <div className="flex flex-column">
            <CampDates />
          </div>
        </div>
      </div>
      <WaveDivider color="var(--blue-3)" />
      <div className="pt4 pb4 f3 white bg-blue-3">
        <div className="mt4 mt5-m mt4-l ph3 mw8 center flex flex-column-reverse flex-row-ns">
          <div className="w-100 w-60-ns">
            <h3 className="f2 mt0">Ofte stilte spørsmål</h3>
            <FAQ />
          </div>
          <div className="w-100 w-40-ns mb3-ns ml3-ns">
            <LandingPageVideo />
          </div>
        </div>
      </div>
      <Footer className="bg-blue-3 white" />
    </Page>
  );
}

export default HomePage;
