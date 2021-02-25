import Image from 'next/image';

import Page from '../components/Page';
import WaveDivider from '../components/WaveDivider';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import LandingPageVideo from '../components/LandingPageVideo';
import FAQ from '../components/FAQ';

import colors from '../styles/colors';
import CampDates from '../components/CampDates';
import { CTA } from '../components/CTA';

function HomePage() {
  return (
    <Page style={{ backgroundColor: colors.primary }}>
      <Navigation />
      <div className="mt4 mt5-m mt4-l ph3 mw8 center flex flex-column-reverse flex-row-ns">
        <div className="w-100 tc mb4">
          <Image
            className="db-ns w5 w-auto-ns"
            src="/static/img/logo.png"
            width="500"
            height="680"
            priority
            alt="Kolomåke"
          />
        </div>

        <div className="ml4-l tc-ns">
          <style jsx>{`
            * {
              color: ${colors.darkBlue};
            }

            p,
            ul > li {
              line-height: 1.5;
            }
          `}</style>
          <h1 className="mb0 lh-title f1-ns">
            Sommerferie på{' '}
            <span style={{ whiteSpace: 'nowrap' }}>Filtvet Feriekoloni</span>
          </h1>
          <div className="fw1 f4 white-80 mt3 mb4 lh-title">
            <p>
              Trefoldighet Feriekoloni er Norges eldste aktive feriekoloni –
              eller sommerleir om du vil!
            </p>
            <p>
              I {new Date().getFullYear() - 1890} år har barn og unge vært på
              ferie hos oss. Kanskje du også vil komme til sommeren?{' '}
            </p>
          </div>
          <CampDates />
          <CTA subtext="Søknadsfrist 1.mai">Søk nå</CTA>
        </div>
      </div>
      <WaveDivider color={colors.primary} />
      <div
        className="pt4 pb4 f3 white"
        style={{ backgroundColor: colors.primary }}>
        <div className="mt4 mt5-m mt4-l ph3 mw8 center flex flex-column-reverse flex-row-ns">
          <div className="w-100 w-60-ns">
            <h3 className="f2 mt0">Ofte stilte spørsmål</h3>
            <FAQ />
          </div>
          <div className="w-100 w-40-ns mb3 ml3">
            <LandingPageVideo />
          </div>
        </div>
      </div>
      <Footer bgColor={colors.primary} color="white" />
    </Page>
  );
}

export default HomePage;
