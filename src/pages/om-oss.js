import Page from '../components/Page';
import { HeroImage, HeroContent } from '../components/PageComponents';
import { PageContent } from '../components/PageContent';
import { PageTitle } from '../components/PageTitle';
import { Text } from '../components/Text';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import WaveDivider from '../components/WaveDivider';

const AboutPage = () => (
  <Page title="Om oss | 130 år med feriekoloni">
    <Navigation />
    <HeroImage src="/static/img/IMG_6409.jpg">
      <HeroContent>
        <PageTitle>
          {new Date().getFullYear() - 1890} år med feriekoloni
        </PageTitle>
      </HeroContent>
      <WaveDivider color="white" absolute />
    </HeroImage>
    <PageContent article>
      <Text>
        På feriekolonien er det aktiviteter for både store og små, for tøffinger
        og for de som ikke vil være så tøffe. Her leker vi dagen lang. Kjører
        båt, padler kano, spiller fotball, tennis, basket og innebandy, drar på
        sykkeltur og har utendørs aerobic med musikk. Vi fanger fisk, frosk og
        krabbe (som vi såklart slipper ut igjen), og vi drar på spennende
        skattejakt ved det gamle fyret. Vi lager også uhøytidelig
        talentkonkurranse der både barn og voksne deltar og underholder. For de
        minste barna har vi sandkasser og lekeapparater, og vi drar ofte på tur
        og plukker blåbær og strandskjell.
      </Text>
      <Text>
        Skulle det bli veldig dårlig vær, finner vi på innendørsting som å
        tegne, spille spill, lage armbånd og smykker av sneglehus, eller å se en
        film på rommene eller felles i kinosalen (med popcorn, såklart). En gang
        i uka har vi disco med både disco-lys og proff DJ.
      </Text>
      <Text>
        Dagene går unna på feriekolonien og aktivitetsnivået er høyt mellom
        frokost, lunsj og middag. Etter kveldsmaten så roer det seg, og vi har
        fine stunder sammen med bok, småprat eller sang på rommene før leggetid.
      </Text>
      <Text>
        Feriekolonien har noe for enhver, og hos oss er man stort sett bare med
        på det man vil.
      </Text>
      <hr className="b--black-05 ba mv5 " />
      <h3>Dette trenger du å vite</h3>
      <Text>Vi deler opp sommeren i 3 partier.</Text>
      <Text>
        Hvert parti er på totalt 9 dager (ink. reisedager). Dette for å
        imøtekomme etterspørselen for kortere opphold. For dere som
        liker/trenger et lengre opphold, er det fullt mulig å søke om opphold på
        to partier dersom plass er tilgjengelig.
      </Text>
      <Text>Tilbudet vårt er for barn i aldersgruppen 5-12 år.</Text>
      <Text>Søknadsfrist for sommeren er satt til 15. april.</Text>
      <Text>
        Vi vil ta imot søknader etter denne datoen dersom det er plass, men de
        som har søkt innen tidsfristen vil bli prioritert.
      </Text>

      <Text>
        Det er hyggelig og viktig å få post hjemmefra når man er på feriekoloni.
        Send veldig gjerne kort, pakke, et blad eller to, men ikke så mye
        godteri, for dette kjøper barna selv i kiosken, i tillegg til at vi har
        dessert til middagen hver dag.
      </Text>

      <Text>
        Det at foresatte ønsker å snakke med barna skjønner vi svært godt, men
        det blir problematisk for oss dersom 20-30-40 barn hver dag må hentes
        inn fra lek eller aktiviteter for å snakke i telefonen. Det er bare
        hyggelig med telefoner, så ring gjerne hver dag og snakk med en av oss
        som jobber her. Vi kjenner barnet ditt godt og kan formidle alle
        beskjeder. Dersom et barn ikke skulle slå seg til ro etter et par dager
        og ha hjemlengsel, er vi raske med å ringe hjem og si ifra om dette. Det
        samme gjelder hvis noen blir syke. Som regel er det da greiest at barna
        drar hjem og er der til de er friske, og etter det kan fortsette ferien
        med oss på Filtvet.
      </Text>
      <Text>
        Vi som jobber her har årlig kursing i førstehjelp og brannvern med våre
        ansatte. På turer på vann og land er vi alltid påpasselige med å bruke
        redningsvest og sykkelhjelm – store og små.
      </Text>

      <Text>
        Vi ser fram til å se dere på feriekolonien, og til aktive og hyggelige
        sommerdager på Filtvet!
      </Text>
      <hr className="b--black-05 ba mv5 " />
      <h3 className="f3">Ofte stilte spørsmål</h3>
      <FAQ />
    </PageContent>
    <Footer />
  </Page>
);

export default AboutPage;
