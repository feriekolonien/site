import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import Page from '../../components/Page';
import { Text } from '../../components/Text';
import WaveDivider from '../../components/WaveDivider';

const CancelledPost = () => {
  return (
    <Page>
      <Navigation />
      <div
        className="bg-blue-0"
        style={{
          margin: 0,
        }}>
        <h1 className="f1 fw6 mv0 lh-title white tc pv6 ph3">
          Feriekolonien 2021 <span className="line-through">er avlyst</span>
        </h1>
        <WaveDivider color="white" />
      </div>

      <section className="mw7 center ph3">
        <span>
          Publisert: <time dateTime="2021-05-23">23. Mai 2021</time>
        </span>
        <Text>
          Kjære barn, foreldre og øvrige feriekolonivenner. Denne meldingen
          trodde vi virkelig ikke at vi skulle måtte gi i år;
        </Text>
        <Text>
          Den 18. mai oppdaterte FHI sin veileder ift. aktiviteter for barn og
          unge av lengre varighet. Med dette menes bl.a. opphold med
          overnatting. Gjeldende fra denne datoen er anbefalt gruppestørrelse
          ca. 20 personer totalt. Vi har vært i dialog med både Asker og Oslo
          Kommune, samt andre liknende leirtilbud som bekrefter at dette er det
          vi som feriekoloni må forholde oss til.
        </Text>
        <Text>Derfor blir årets feriekoloni dessverre avlyst.</Text>
        <Text>
          Ingen ønsker mer enn oss at det skal drives normal feriekoloni på
          Filtvet. Vi vil følge med på utviklingen og se om vi får mulighet til
          å arrangere andre alternativer som f.eks. &ldquo;åpne dager&ldquo; i
          løpet av sommeren. Dette vil vi informere dere om dersom det blir
          aktuelt.
        </Text>
      </section>
      <Footer />
    </Page>
  );
};

export default CancelledPost;
