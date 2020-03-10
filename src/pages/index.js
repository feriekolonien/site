import Page from '../components/Page';
import {
  PageTitle,
  PageLead,
  CTA,
  HeroContent,
  PageContent,
} from '../components/PageComponents';
import CampDates from '../components/CampDates';
import WaveDivider from '../components/WaveDivider';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import FAQ from '../components/FAQ';

import colors from '../styles/colors';

function HomePage() {
  return (
    <Page style={{ backgroundColor: colors.primary }}>
      <div style={{ backgroundColor: colors.secondary }}>
        <Navigation />
        <div className="mt4 mt5-m mt4-l ph3 mw8 center flex flex-column-reverse flex-row-ns">
          <div className="w-100 tc mb4">
            <img
              className="db-ns w5 w-auto-ns"
              src="/static/img/logo.png"
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
            <h1 className="mb0 lh-title">Sommerferie på Filtvet Feriekoloni</h1>
            <div className="fw1 f4 white-80 mt3 mb4 lh-title">
              <p>
                Trefoldighet Feriekoloni er norges eldste aktive feriekoloni –
                eller sommerleir om du vil!
              </p>
              <p>
                I over 125 år har barn og unge vært på ferie hos oss. Kanskje du
                også vil komme til sommeren?{' '}
              </p>
              <CampDates />
            </div>
            <CTA>Søk nå</CTA>
            <span className="fw1 f4 mt3 mb4 lh-title db">
              Søknadsfrist: 15. april 2020!
            </span>
          </div>
        </div>
        <WaveDivider color={colors.primary} />
      </div>
      <PageContent bgColor={colors.primary} color="white">
        <h3 className="">Ofte stilte spørsmål</h3>
        <FAQ />
      </PageContent>
      <Footer bgColor={colors.primary} color="white" />
    </Page>
  );
}

export default HomePage;
