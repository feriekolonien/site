import React from 'react';

import Page from '../components/Page';
import { HeroImage, HeroContent } from '../components/PageComponents';
import Navigation from '../components/Navigation';
import { PageTitle } from '../components/PageTitle';
import WaveDivider from '../components/WaveDivider';
import Footer from '../components/Footer';
import { Text } from '../components/Text';

const Historie = () => (
  <Page title="Historie">
    <Navigation />
    <HeroImage src="/static/img/historien.jpg">
      <HeroContent>
        <PageTitle>Historien</PageTitle>
      </HeroContent>
      <WaveDivider color="white" absolute />
    </HeroImage>

    <section className="mw7 center">
      <Text>
        Sent på 1800-tallet tjenestegjorde en ung diakonisse ved navn Gina Aulie
        i Trefoldighetskirken i Oslo. Hun ønsket å gi fattige familier i Oslo
        bedre muligheter, og på bare noen få år utrettet Gina Aulie flere gode
        tilbud for de som trengte det mest. Et av tilbudene som fortsatt er i
        drift i dag kom sommeren 1890. En feriekoloni for fattige bybarn.
        Rettere sagt et sommerparadis vekk fra Oslo og utslitte og fattige
        foreldre som trengte et avbrekk. Gina drev feriekolonien i mange år. Hun
        var hele Filtvet Feriekolonis hjerte sammen med sine lojale «tanter».
      </Text>
      <Text>
        Mye har endret seg siden 1890. Feriekoloni har fått flere hus, barna
        ligger ikke anføttes i sengene mer, det er verken diakonisser eller
        tanter som passer på barna, og tilbudet er nå for alle typer barn og
        familier. Men de viktigste tradisjonene og verdiene er fortsatt de
        samme. Filtvet Feriekoloni er og blir et unikt tilbud for barn. Her
        skapes det et sjeldent samhold mellom barn, voksne og stedet sommer
        etter sommer, like mye nå, som for over hundre år siden.
      </Text>
      <Text>
        I 1890 hadde Filtvet Feriekoloni sin første sommer. Idag er vi stolte av
        at Filtvet Feriekoloni er den lengst levende feriekolonien i landet med
        sine {new Date().getFullYear() - 1890} år.
      </Text>
    </section>
    <Footer />
  </Page>
);

export default Historie;
