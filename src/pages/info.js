import Page from "../components/Page";
import {
  PageTitle,
  PageLead,
  CTA,
  HeroContent,
  HeroImage,
  PageContent,
  Text
} from "../components/PageComponents";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Countdown from "../components/Countdown";
import Navigation from "../components/Navigation";

function InfoPage() {
  return (
    <Page title="Praktisk info">
      <HeroImage>
        <Navigation />
        <HeroContent>
          <PageTitle>Dette trenger du å vite</PageTitle>
          <PageLead></PageLead>
          <Countdown />
        </HeroContent>
      </HeroImage>
      <PageContent article>
        <Text>Vi deler opp sommeren i 3 partier.</Text>
        <Text>
          Hvert parti er på totalt 11 dager (ink. reisedager). Dette for å
          imøtekomme etterspørselen for kortere opphold. For dere som
          liker/trenger et lengre opphold, er det fullt mulig å søke om opphold
          på to partier dersom plass er tilgjengelig.
        </Text>
        <Text>Tilbudet vårt er for barn i aldersgruppen 5-12 år.</Text>
        <Text>Søknadsfrist for sommeren 2018 er satt til 15. april.</Text>
        <Text>
          Vi vil ta imot søknader etter denne datoen dersom det er plass, men de
          som har søkt innen tidsfristen vil bli prioritert.
        </Text>
        <Text>Ønsker du å søke om plass – trykk på lenken «Søknadsskjema»</Text>
        <Text>
          Vi ser fram til å se dere på feriekolonien, og til aktive og hyggelige
          sommerdager på Filtvet.
        </Text>
        <hr className="b--black-05 ba mv5 " />
        <h3 className="">Ofte stilte spørsmål</h3>
        <FAQ />
      </PageContent>
      <Footer />
    </Page>
  );
}

export default InfoPage;
