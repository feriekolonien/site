import { useState } from 'react';
import { Text } from './Text';

const Question = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleState() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <summary
      tabIndex="0"
      role="button"
      data-splitbee-event={`Click: ${title}`}
      data-splitbee-event-type="FAQ Toggle"
      onClick={toggleState}
      className="f3 relative outline-0"
      style={{ cursor: 'pointer' }}
    >
      <style jsx>
        {`
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
        `}
      </style>
      {children}
      <span
        aria-label="pointer"
        role="img"
        className={`dropdown dib ml2 ${isOpen && 'rotate-90'}`}
      >
        ▸
      </span>
    </summary>
  );
};

const FAQElement = ({ children }) => (
  <details className="fw3 mb3 lh-copy">{children}</details>
);

const FAQ = () => (
  <>
    <FAQElement>
      <Question title="Blir det feriekoloni i 2021">
        Blir det feriekoloni i 2021?
      </Question>
      <Text size="f4">
        Etter litt om og men, ble det klart i slutten av juni at vi får til ett
        parti i sommer i uke 28-29! Ingen ønsker mer enn oss at det skal drives
        normal feriekoloni på Filtvet. Etter dialog med Asker kommune bestemte
        vi oss derfor for at ett parti er bedre enn ingen!
      </Text>
    </FAQElement>
    <FAQElement>
      <Question title="Feriekoloni, hva er det">
        Feriekoloni, hva er det?
      </Question>
      <Text size="f4">
        Feriekolonien på Filtvet eies av Trefoldighetslegatet. Driften har i
        alle år vært ivaretatt av Trefoldighet Menighet (Trefoldighetskirken)
        som ligger i Oslo sentrum og som nå er en del av Sentrum og St.
        Hanshaugen sokn.
      </Text>

      <Text size="f4">
        Trefoldighet feriekoloni har som mål å gi barn en morsom og innholdsrik
        ferie.
      </Text>

      <Text size="f4">
        I over 130 år har barn og unge vært på sommerferie hos oss. I år kan du
        også få være med. Trefoldighet feriekoloni ligger på Filtvet på
        Hurumlandet, ca. 1 times bilkjøring fra Oslo. Hurumlandet er et
        spennende sted med forskjellig natur. Nede ved sjøen er det
        «sørlandsidyll» med strender og svaberg, og ikke langt unna er det fine
        skogsterreng med store vann. Det gir muligheter for mange fine
        aktiviteter.
      </Text>
    </FAQElement>

    <FAQElement>
      <Question title="Hvem er feriekolonien for">
        Hvem er feriekolonien for?
      </Question>
      <Text size="f4">
        Alle gutter og jenter i alderen 5-12 år kan søke om plass på
        feriekolonien. Her vil man treffe nye venner eller kanskje noen man
        kjenner fra før. Noen reiser på feriekoloni sammen med en venn eller
        søsken, mens andre reiser alene. Uansett, feriekolonien tar godt vare på
        alle sammen.
      </Text>
    </FAQElement>

    <FAQElement>
      <Question title="Hva skal man ha med seg">
        Hva skal man ha med seg?
      </Question>
      <Text size="f4">
        Feriekolonien har mye fine og rene klær i alle størrelser som barna
        låner når de er her ute, så mye tøy behøver du ikke. Det man MÅ ta med
        seg er: regntøy/gummistøvler, joggesko, toalettsaker (tannbørste,
        tannkrem, såpe, shampo, kam/børste, solkrem med solfaktor) kosedyr hvis
        man vil, og litt lommepenger til kiosken som er åpen to ganger i uka.
        Ønsker du likevel å ta med noe eget tøy, er det viktig at de er godt
        merket med navn, og at man passer på tingene sine. Mobiltelefon ønsker
        vi ikke at barna har med.
      </Text>
    </FAQElement>

    <FAQElement>
      <Question title="Hvem jobber på feriekolonien">
        Hvem jobber på feriekolonien?
      </Question>
      <Text size="f4">
        Sammen med barna er vi 15-20 voksne som passer på. Mange av oss jobber
        med barn og ungdom resten av året eller så har de vært barn på
        feriekolonien selv. Som så mange av barna, er også betjeningen på
        feriekolonien ganske stabil fra år til år. Dette er med på å skape et
        trygt miljø for både barn og voksne. Det viktigste med å være en av de
        voksne på feriekolonien er å være en god venn, en lekekamerat, samtidig
        som man passer godt på – alle som èn.
      </Text>
    </FAQElement>
  </>
);

export default FAQ;
