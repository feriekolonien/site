import React, { useState } from 'react';

type FAQElementProps = { children: React.ReactNode; question: string };

const FAQElement = ({ children, question }: FAQElementProps) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleState() {
    setIsOpen((prevState) => !prevState);
  }
  return (
    <details className="text-white">
      <summary
        tabIndex={0}
        role="button"
        data-splitbee-event={`Click: ${question}`}
        data-splitbee-event-type="FAQ Toggle"
        onClick={toggleState}
        className="mb-3 cursor-pointer text-xl outline-none ring-white/60 focus:ring-1 md:text-2xl"
      >
        <span
          aria-label="pointer"
          role="img"
          className={[isOpen && 'inline-block rotate-90', 'mr-2'].join(' ')}
        >
          👉
        </span>
        {question}
      </summary>
      <div className="space-y-4">{children}</div>
    </details>
  );
};

const Answer = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base last-of-type:mb-4 md:text-lg">{children}</p>
);

const FAQ = () => (
  <div className="space-y-2">
    <FAQElement question="Feriekoloni, hva er det?">
      <Answer>
        Feriekolonien på Filtvet eies av Trefoldighetslegatet. Driften har i
        alle år vært ivaretatt av Trefoldighet Menighet (Trefoldighetskirken)
        som ligger i Oslo sentrum og som nå er en del av Sentrum og St.
        Hanshaugen sokn.
      </Answer>

      <Answer>
        Trefoldighet feriekoloni har som mål å gi barn en morsom og innholdsrik
        ferie.
      </Answer>

      <Answer>
        I over 130 år har barn og unge vært på sommerferie hos oss. I år kan du
        også få være med. Trefoldighet feriekoloni ligger på Filtvet på
        Hurumlandet, ca. 1 times bilkjøring fra Oslo. Hurumlandet er et
        spennende sted med forskjellig natur. Nede ved sjøen er det
        «sørlandsidyll» med strender og svaberg, og ikke langt unna er det fine
        skogsterreng med store vann. Det gir muligheter for mange fine
        aktiviteter.
      </Answer>
    </FAQElement>

    <FAQElement question="Hvem er feriekolonien for?">
      <Answer>
        Alle gutter og jenter i alderen 5-12 år kan søke om plass på
        feriekolonien. Her vil man treffe nye venner eller kanskje noen man
        kjenner fra før. Noen reiser på feriekoloni sammen med en venn eller
        søsken, mens andre reiser alene. Uansett, feriekolonien tar godt vare på
        alle sammen.
      </Answer>
    </FAQElement>

    <FAQElement question="Hva skal man ha med seg?">
      <Answer>
        Feriekolonien har mye fine og rene klær i alle størrelser som barna
        låner når de er her ute, så mye tøy behøver du ikke. Det man <em>må</em>{' '}
        ta med seg er:
      </Answer>
      <ul className="ml-6 list-disc text-base md:text-lg">
        <li>Regntøy/gummistøvler</li>
        <li>Joggesko</li>
        <li>
          Toalettsaker (tannbørste, tannkrem, såpe, shampo, kam/børste, solkrem
          med solfaktor)
        </li>
        <li>Kosedyr hvis man vil</li>
        <li>Litt lommepenger til kiosken som er åpen to ganger i uka</li>
      </ul>
      <Answer>
        Ønsker du likevel å ta med noe eget tøy, er det viktig at de er godt
        merket med navn, og at man passer på tingene sine. Mobiltelefon ønsker
        vi ikke at barna har med.
      </Answer>
    </FAQElement>

    <FAQElement question="Hvem jobber på feriekolonien?">
      <Answer>
        Sammen med barna er vi 15-20 voksne som passer på. Mange av oss jobber
        med barn og ungdom resten av året eller så har de vært barn på
        feriekolonien selv. Som så mange av barna, er også betjeningen på
        feriekolonien ganske stabil fra år til år. Dette er med på å skape et
        trygt miljø for både barn og voksne. Det viktigste med å være en av de
        voksne på feriekolonien er å være en god venn, en lekekamerat, samtidig
        som man passer godt på – alle som èn.
      </Answer>
    </FAQElement>
  </div>
);

export default FAQ;
