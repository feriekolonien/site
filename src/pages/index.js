import Page from '../components/Page';
import {
  PageTitle,
  PageLead,
  CTA,
  HeroContent,
  HeroImage,
} from '../components/PageComponents';
import CampDates from '../components/CampDates';
import Footer from '../components/Footer';
import Countdown from '../components/Countdown';
import Navigation from '../components/Navigation';
import Video from '../components/Video';

function HomePage() {
  return (
    <Page>
      <HeroImage imageUrl="/static/img/IMG_5962.jpg">
        <Navigation />
        <HeroContent>
          <PageTitle>Sommerferie på Filtvet Feriekoloni</PageTitle>
          <PageLead>
            <p>
              Hei! Velkommen til Trefoldighet Feriekolonis hjemmeside. Vi er
              norges eldste aktive feriekoloni – eller sommerleir om du vil! I
              over 125 år har barn og unge vært på ferie hos oss. Kanskje du
              også vil komme til sommeren? Datoer for 2020:
            </p>
            <CampDates />
          </PageLead>
          <CTA>Søk nå</CTA>
          <PageLead>Søknadsfrist: 15. april 2020!</PageLead>
        </HeroContent>
      </HeroImage>
      <Footer />
    </Page>
  );
}

export default HomePage;
