import { useState } from 'react';
import { Text } from './Text';

const Question = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleState() {
    setIsOpen(prevState => !prevState);
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <summary
      tabIndex="0"
      role="button"
      onClick={toggleState}
      className="f3 relative outline-0"
      style={{ cursor: 'pointer' }}>
      <style jsx>{`
        .dropdown {
          transition: all 90ms ease-in;
        }
        summary {
          list-style-image: none;
          list-style: none;
        }

        summary::-webkit-details-marker {
          background: none;
          color: transparent;
        }
        summary::marker {
          display: none;
        }
        summary {
          list-style-type: none;
        }
        summary::-webkit-details-marker {
          display: none;
        }
        summary:focus {
          outline: 1px dotted rgba(255, 255, 255, 0.4);
        }
      `}</style>
      {children}
      <span
        aria-label="pointer"
        role="img"
        className={`dropdown dib ml2 ${isOpen && 'rotate-90'}`}>
        ▸
      </span>
    </summary>
  );
};

const FAQElement = ({ children }) => {
  return <details className="fw3 mb3 lh-copy">{children}</details>;
};

const FAQ = () => {
  return (
    <>
      <FAQElement>
        <Question>Blir det feriekoloni i 2021?</Question>
        <Text size="f4">
          Vårt ønske er å tilby ordinært sommeropphold, men vil presisere at vi
          innretter oss etter offentlige retningslinjer for forsvarlig drift
          mtp. den pågående pandemi problematikken. Det er foreløpig vanskelig
          for oss å se hvordan dagens situasjon utvikler seg fram mot oppstart,
          og vil måtte ta et forbehold om driftsfasong - MEN vi håper og tror vi
          kan få lov til å “se ut som oss selv” når sommeren kommer :) Vi vil
          holde påmeldte oppdatert om situasjonen fortløpende.
        </Text>
      </FAQElement>
      <FAQElement>
        <Question>Feriekoloni, hva er det?</Question>
        <Text size="f4">
          Feriekolonien på Filtvet eies av Trefoldighetslegatet. Driften har i
          alle år vært ivaretatt av Trefoldighet Menighet (Trefoldighetskirken)
          som ligger i Oslo sentrum og som nå er en del av Sentrum og St.
          Hanshaugen sokn.
        </Text>

        <Text size="f4">
          Trefoldighet feriekoloni har som mål å gi barn en morsom og
          innholdsrik ferie.
        </Text>

        <Text size="f4">
          I over 125 år har barn og unge vært på sommerferie hos oss. I år kan
          du også få være med. Trefoldighet feriekoloni ligger på Filtvet på
          Hurumlandet, ca. 1 times bilkjøring fra Oslo. Hurumlandet er et
          spennende sted med forskjellig natur. Nede ved sjøen er det
          «sørlandsidyll» med strender og svaberg, og ikke langt unna er det
          fine skogsterreng med store vann. Det gir muligheter for mange fine
          aktiviteter.
        </Text>
      </FAQElement>

      <FAQElement>
        <Question>Hvem er feriekolonien for?</Question>
        <Text size="f4">
          Alle gutter og jenter i alderen 5-12 år kan søke om plass på
          feriekolonien. Her vil man treffe nye venner eller kanskje noen man
          kjenner fra før. Noen reiser på feriekoloni sammen med en venn eller
          søsken, mens andre reiser alene. Uansett, feriekolonien tar godt vare
          på alle sammen.
        </Text>
      </FAQElement>

      <FAQElement>
        <Question>Hva skal man ha med seg?</Question>
        <Text size="f4">
          I løpet av 11 raske dager tar du kun med deg det du trenger.
        </Text>
        <Text size="f4">
          Feriekolonien har mye fine og rene klær i alle størrelser som barna
          låner når de er her ute, så mye tøy behøver du ikke. Det man MÅ ta med
          seg er: regntøy/gummistøvler, joggesko, toalettsaker (tannbørste,
          tannkrem, såpe, shampo, kam/børste, solkrem med solfaktor) kosedyr
          hvis man vil, og litt lommepenger til kiosken som er åpen to ganger i
          uka. Ønsker du likevel å ta med noe eget tøy, er det viktig at de er
          godt merket med navn, og at man passer på tingene sine. Mobiltelefon
          ønsker vi ikke at barna har med.
        </Text>
      </FAQElement>

      <FAQElement>
        <Question>Hvem jobber på feriekolonien?</Question>
        <Text size="f4">
          Hver sommer er det 50 barn på feriekolonien av gangen i 3 x 11 dager.
        </Text>
        <Text size="f4">
          Sammen med barna er vi 15-20 voksne som passer på. Mange av oss jobber
          med barn og ungdom resten av året eller så har de vært barn på
          feriekolonien selv. Som så mange av barna, er også betjeningen på
          feriekolonien ganske stabil fra år til år. Dette er med på å skape et
          trygt miljø for både barn og voksne. Det viktigste med å være en av de
          voksne på feriekolonien er å være en god venn, en lekekamerat,
          samtidig som man passer godt på – alle som èn.
        </Text>
      </FAQElement>
    </>
  );
};

export default FAQ;
