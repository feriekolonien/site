import Link from 'next/link';
import Bleed from '../components/Bleed';
import { ButtonLink } from '../components/Button';
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
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-4 pt-8 mb-14">
        <div className="p-5 order-2 md:order-1">
          <img
            className="mx-auto max-w-[200px] md:max-w-xs"
            src="/static/img/logo.png"
            alt="Kolomåke"
          />
        </div>
        <div className="p-5 md:pl-0 order-1 md:order-2">
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
          <div className="max-w-sm text-center md:text-right">
            <p className="inline-block mr-4 mb-3">Søknadsfrist 1. april!</p>
            <ButtonLink href="/soknadsskjema" className="text-xl">
              Søk nå
            </ButtonLink>
          </div>
        </div>
      </div>
      <Bleed className="relative pt-20 md:pt-40 bg-gradient-to-t from-[#2C72AC] to-[#46B3D9]">
        <WaveDivider />
        <div
          className={[
            'max-w-6xl mx-auto p-3 md:p-0',
            // Grid stuff
            'grid grid-rows-2 md:grid-rows-none md:grid-cols-5 gap-8',
          ].join(' ')}
        >
          <div className="md:col-span-3 md:ml-10">
            <h2 className="text-white font-bold text-2xl md:text-3xl mb-4">
              Ofte stilte spørsmål
            </h2>
            <FAQ />
          </div>
          <div className="md:col-span-2 md:mr-10">
            <div className="max-w-sm">
              <LandingPageVideo />
              <p className="mt-3 text-center text-white text-base lg:text-lg">
                <Link href="/bilder">
                  <a>
                    Se flere sommerminner fra{' '}
                    <span className="whitespace-nowrap">Filtvet →</span>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Footer className="mt-20 md:mt-44" showSand={true} />
      </Bleed>
    </Page>
  );
}

export default HomePage;
