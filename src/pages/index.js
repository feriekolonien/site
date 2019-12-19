import Page from '../components/Page';
import {
  PageTitle,
  PageLead,
  CTA,
  HeroContent,
  HeroImage,
} from '../components/PageComponents';
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
            <div className="flex justify-center-l tl">
              <ul className="pl0">
                <li className="db">
                  <span className="b">1. parti:</span> tirsdag 23. juni – fredag
                  3. juli
                </li>
                <li className="db">
                  <span className="b">2. parti:</span> fredag 10. juli – mandag
                  20. juli
                </li>
                <li className="db">
                  <span className="b">3. parti:</span> mandag 27. juli – torsdag
                  6. august
                </li>
              </ul>
            </div>
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
