import Image from 'next/image';
import Button from '../components/Button';
import CampDates from '../components/CampDates';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import LandingPageVideo from '../components/LandingPageVideo';
import Navigation from '../components/Navigation';
import Page from '../components/Page';
import WaveDivider from '../components/WaveDivider';

function HomePage() {
  return (
    <Page className="px-3 overflow-hidden">
      <Navigation />
      <div className="grid grid-cols-2 max-w-6xl mx-auto gap-8 pt-8">
        <div className="p-5">
          <img
            className="max-w-xs mx-auto"
            src="/static/img/logo.png"
            alt="Kolomåke"
          />
        </div>
        <div className="p-5 mb-14">
          <h1 className="text-4xl font-semibold uppercase mb-6">
            Sommerferie på <span className="nowrap">Filtvet Feriekoloni</span>
          </h1>
          <div className="text-lg mb-14 ">
            <p className="mb-4">
              Trefoldighet Feriekoloni er Norges eldste aktive feriekoloni –
              eller sommerleir om du vil!
            </p>
            <p>
              I over 125 år har barn og unge vært på ferie hos oss. Kanskje du
              også vil komme til sommeren?
            </p>
          </div>
          <CampDates />
          <div>
            <Button>Søk nå</Button>
          </div>
        </div>
      </div>
      <WaveDivider />
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
