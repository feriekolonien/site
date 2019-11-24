import Page from "../components/Page";
import {
  HeroImage,
  HeroContent,
  PageTitle,
  PageLead,
  Text,
  PageContent
} from "../components/PageComponents";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <Page title="Om oss | 130 år med feriekoloni">
      <HeroImage>
        <Navigation />
        <HeroContent>
          <PageTitle>130 år med feriekoloni</PageTitle>
          <PageLead>Feriekolonien ble startet av Gina Aulie i 1890</PageLead>
        </HeroContent>
      </HeroImage>
      <PageContent article>
        <Text>
          På feriekolonien er det aktiviteter for både store og små, for
          tøffinger og for de som ikke vil være så tøffe. Her leker vi dagen
          lang. Kjører båt, padler kano, spiller fotball, tennis, basket og
          innebandy, drar på sykkeltur og har utendørs aerobic med musikk. Vi
          fanger fisk, frosk og krabbe (som vi såklart slipper ut igjen), og vi
          drar på spennende skattejakt ved det gamle fyret. Vi lager også
          uhøytidelig talentkonkurranse der både barn og voksne deltar og
          underholder. For de minste barna har vi sandkasser og lekeapparater,
          og vi drar ofte på tur og plukker blåbær og strandskjell.
        </Text>
        <Text>
          Skulle det bli veldig dårlig vær, finner vi på innendørsting som å
          tegne, spille spill, lage armbånd og smykker av sneglehus, eller å se
          en film på rommene eller felles i kinosalen (med popcorn, såklart). En
          gang i uka har vi disco med både disco-lys og proff DJ.
        </Text>
        <Text>
          Dagene går unna på feriekolonien og aktivitetsnivået er høyt mellom
          frokost, lunsj og middag. Etter kveldsmaten så roer det seg, og vi har
          fine stunder sammen med bok, småprat eller sang på rommene før
          leggetid.
        </Text>
        <Text>
          Feriekolonien har noe for enhver, og hos oss er man stort sett bare
          med på det man vil.
        </Text>
      </PageContent>
      <Footer />
    </Page>
  );
};

export default AboutPage;
