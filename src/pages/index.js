import Page from '../components/Page';
import {
  PageTitle,
  PageLead,
  CTA,
  HeroContent,
  HeroImage,
  PageContent,
} from '../components/PageComponents';
import CampDates from '../components/CampDates';
import WaveDivider from '../components/WaveDivider';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import FAQ from '../components/FAQ';

function HomePage() {
  return (
    <Page style={{ backgroundColor: '#2C72AC' }}>
      <div style={{ backgroundColor: '#46B3D9' }}>
        <Navigation />
        <HeroContent>
          <img src="/static/img/logo.png" alt="Kolomåke" />
          <div className="ml4-l">
            <PageTitle>Sommerferie på Filtvet Feriekoloni</PageTitle>
            <PageLead>
              <p>
                Trefoldighet Feriekoloni er norges eldste aktive feriekoloni –
                eller sommerleir om du vil!
              </p>
              <p>
                I over 125 år har barn og unge vært på ferie hos oss. Kanskje du
                også vil komme til sommeren?{' '}
              </p>
              <CampDates />
            </PageLead>
            <CTA>Søk nå</CTA>
            <PageLead>Søknadsfrist: 15. april 2020!</PageLead>
          </div>
        </HeroContent>
        <WaveDivider color="#2C72AC" />
      </div>
      <PageContent bgColor="#2C72AC" color="white">
        <img src="ml4-l" />
        <h3 className="">Ofte stilte spørsmål</h3>
        <FAQ />
      </PageContent>
      <Footer bgColor="#2C72AC" color="white" />
    </Page>
  );
}

export default HomePage;
