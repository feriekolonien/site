import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import Page from '../../components/Page';
import { Text } from '../../components/Text';

const CancelledPost = () => (
  <Page>
    <Navigation />

    <article className="prose mx-auto mt-4 mb-10 sm:mt-24 md:prose-lg lg:prose-xl">
      <h1 className="mb-8 text-4xl font-bold sm:text-5xl lg:text-5xl">
        Feriekolonien 2021 er avlyst
      </h1>
      <span>
        <strong>Publisert:</strong>{' '}
        <time dateTime="2021-05-23">23. Mai 2021</time>
      </span>
      <Text>
        Kjære barn, foreldre og øvrige feriekolonivenner. Denne meldingen trodde
        vi virkelig ikke at vi skulle måtte gi i år;
      </Text>
      <Text>
        Den 18. mai oppdaterte FHI sin veileder ift. aktiviteter for barn og
        unge av lengre varighet. Med dette menes bl.a. opphold med overnatting.
        Gjeldende fra denne datoen er anbefalt gruppestørrelse ca. 20 personer
        totalt. Vi har vært i dialog med både Asker og Oslo Kommune, samt andre
        liknende leirtilbud som bekrefter at dette er det vi som feriekoloni må
        forholde oss til.
      </Text>
      <Text>Derfor blir årets feriekoloni dessverre avlyst.</Text>
      <Text>
        Ingen ønsker mer enn oss at det skal drives normal feriekoloni på
        Filtvet. Vi vil følge med på utviklingen og se om vi får mulighet til å
        arrangere andre alternativer som f.eks. &ldquo;åpne dager&ldquo; i løpet
        av sommeren. Dette vil vi informere dere om dersom det blir aktuelt.
      </Text>
    </article>
    <Footer />
  </Page>
);

export default CancelledPost;
