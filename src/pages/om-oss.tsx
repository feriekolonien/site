import Page from '../components/Page';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import Card from '../components/Card';

const YEARS = new Date().getFullYear() - 1890;

const AboutPage = () => (
  <Page title={`Om oss | ${YEARS} år med feriekoloni`}>
    <Navigation />
    <article className="prose max-w-prose mx-auto max-w-8xl p-4 sm:px-6 md:px-8 mb-12">
      <img
        src="/static/img/about-us.jpg"
        alt="Historiefortelling på stranda"
        className="rounded-xl"
      />
      <h1>{YEARS} år med feriekoloni</h1>
      <p>
        På feriekolonien er det aktiviteter for både store og små, for tøffinger
        og for de som ikke vil være så tøffe. Her leker vi dagen lang. Kjører
        båt, padler kano, spiller fotball, tennis, basket og innebandy, drar på
        sykkeltur og har utendørs aerobic med musikk. Vi fanger fisk, frosk og
        krabbe (som vi såklart slipper ut igjen), og vi drar på spennende
        skattejakt ved det gamle fyret. Vi lager også uhøytidelig
        talentkonkurranse der både barn og voksne deltar og underholder. For de
        minste barna har vi sandkasser og lekeapparater, og vi drar ofte på tur
        og plukker blåbær og strandskjell.
      </p>
      <p>
        Skulle det bli veldig dårlig vær, finner vi på innendørsting som å
        tegne, spille spill, lage armbånd og smykker av sneglehus, eller å se en
        film på rommene eller felles i kinosalen (med popcorn, såklart). En gang
        i uka har vi disco med både disco-lys og proff DJ.
      </p>
      <p>
        Dagene går unna på feriekolonien og aktivitetsnivået er høyt mellom
        frokost, lunsj og middag. Etter kveldsmaten så roer det seg, og vi har
        fine stunder sammen med bok, småprat eller sang på rommene før leggetid.
      </p>
      <p>
        Feriekolonien har noe for enhver, og hos oss er man stort sett bare med
        på det man vil.
      </p>
      <hr className="divide-y" />
      <h3>Dette trenger du å vite</h3>
      <p>Vi deler opp sommeren i 3 partier.</p>
      <p>
        Hvert parti er på totalt 11 dager (ink. reisedager). For dere som
        liker/trenger et lengre opphold, er det fullt mulig å søke om opphold på
        to partier dersom plass er tilgjengelig.
      </p>
      <p>Tilbudet vårt er for barn i aldersgruppen 5-12 år.</p>
      <p>Søknadsfrist for sommeren er satt til 1. april.</p>
      <p>
        Vi vil ta imot søknader etter denne datoen dersom det er plass, men de
        som har søkt innen tidsfristen vil bli prioritert.
      </p>

      <p>
        Det er hyggelig og viktig å få post hjemmefra når man er på feriekoloni.
        Send veldig gjerne kort, pakke, et blad eller to, men ikke så mye
        godteri, for dette kjøper barna selv i kiosken, i tillegg til at vi har
        dessert til middagen hver dag.
      </p>

      <p>
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
      </p>
      <p>
        Vi som jobber her har årlig kursing i førstehjelp og brannvern med våre
        ansatte. På turer på vann og land er vi alltid påpasselige med å bruke
        redningsvest og sykkelhjelm – store og små.
      </p>

      <p>
        Vi ser fram til å se dere på feriekolonien, og til aktive og hyggelige
        sommerdager på Filtvet!
      </p>
      <Card className="not-prose shadow-xl">
        <h3 className="text-2xl font-bold text-white mb-6">
          Ofte stilte spørsmål
        </h3>
        <FAQ />
      </Card>
    </article>
    <Footer />
  </Page>
);

export default AboutPage;
