import Page from "../../components/Page";
import {
  PageTitle,
  PageLead,
  CTA,
  HeroContent,
  HeroImage
} from "../../components/PageComponents";
import Footer from "../../components/Footer";
import Countdown from "../../components/Countdown";
import Navigation from "../../components/Navigation";

function Home() {
  return (
    <Page>
      <HeroImage>
        <Navigation />
        <HeroContent>
          <PageTitle>Sommerferie på Filtvet Feriekoloni</PageTitle>
          <PageLead>
            Hei! Velkommen til Trefoldighet Feriekolonis hjemmeside. Vi er
            norges eldste aktive feriekoloni – eller sommerleir om du vil! I
            over 125 år har barn og unge vært på ferie hos oss. Kanskje du også
            vil komme til sommeren?
          </PageLead>
          <Countdown />
          <CTA>Søknadsskjema</CTA>
        </HeroContent>
      </HeroImage>
      <Footer />
    </Page>
  );
}

export default Home;
