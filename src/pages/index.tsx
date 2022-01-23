import Link from 'next/link';
import Image from 'next/image';
import Bleed from '../components/Bleed';
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
              I over 130 år har barn og unge vært på ferie hos oss. Kanskje du
              også vil komme til sommeren?
            </p>
          </div>
          <CampDates />
          <div className="max-w-sm text-right">
            <p className="inline-block mr-4">Søknadsfrist 15. april!</p>
            <Button>Søk nå</Button>
          </div>
        </div>
      </div>
      <Bleed className="relative pt-40 bg-gradient-to-t from-[#2C72AC] to-[#46B3D9]">
        <WaveDivider />
        <div className="grid grid-cols-5 max-w-6xl mx-auto gap-8 pb-32">
          <div className="col-span-3 ml-10">
            <h2 className="text-white font-bold text-3xl mb-4">
              Ofte stilte spørsmål
            </h2>
            <FAQ />
          </div>
          <div className="col-span-2">
            <LandingPageVideo />
            <p className="mt-3 text-center text-white text-lg">
              <Link href="/bilder">
                <a>Se flere sommerminner fra Filtvet →</a>
              </Link>
            </p>
          </div>
        </div>
        <Footer className="" />
      </Bleed>
    </Page>
  );
}

export default HomePage;
