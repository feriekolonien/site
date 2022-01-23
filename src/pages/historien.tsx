import React from 'react';

import Page from '../components/Page';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Historie = () => (
  <Page title="Historie">
    <Navigation />
    <article className="prose max-w-prose mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
      <img
        src="/static/img/historien.jpg"
        alt="Historisk bilde i svart hvitt. Barn som er samlet rundt en leke."
        className="rounded-xl"
      />
      <h1>Historien</h1>
      <p>
        Sent på 1800-tallet tjenestegjorde en ung diakonisse ved navn Gina Aulie
        i Trefoldighetskirken i Oslo. Hun ønsket å gi fattige familier i Oslo
        bedre muligheter, og på bare noen få år utrettet Gina Aulie flere gode
        tilbud for de som trengte det mest. Et av tilbudene som fortsatt er i
        drift i dag kom sommeren 1890. En feriekoloni for fattige bybarn.
        Rettere sagt et sommerparadis vekk fra Oslo og utslitte og fattige
        foreldre som trengte et avbrekk. Gina drev feriekolonien i mange år. Hun
        var hele Filtvet Feriekolonis hjerte sammen med sine lojale «tanter».
      </p>
      <p>
        Mye har endret seg siden 1890. Feriekoloni har fått flere hus, barna
        ligger ikke anføttes i sengene mer, det er verken diakonisser eller
        tanter som passer på barna, og tilbudet er nå for alle typer barn og
        familier. Men de viktigste tradisjonene og verdiene er fortsatt de
        samme. Filtvet Feriekoloni er og blir et unikt tilbud for barn. Her
        skapes det et sjeldent samhold mellom barn, voksne og stedet sommer
        etter sommer, like mye nå, som for over hundre år siden.
      </p>
      <p>
        I 1890 hadde Filtvet Feriekoloni sin første sommer. Idag er vi stolte av
        at Filtvet Feriekoloni er den lengst levende feriekolonien i landet med
        sine {new Date().getFullYear() - 1890} år.
      </p>
    </article>
    <Footer />
  </Page>
);

export default Historie;
