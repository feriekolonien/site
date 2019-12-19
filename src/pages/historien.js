// @flow
import React from 'react';
import Page from '../components/Page';
import {
  HeroImage,
  HeroContent,
  PageTitle,
  PageLead,
  Text,
  PageContent,
} from '../components/PageComponents';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

const HistoryPage = ({ children }) => {
  console.log('HistoryPage says hi');
  return (
    <Page title="Om oss | 130 år med feriekoloni">
      <HeroImage>
        <Navigation />
        <HeroContent>
          <PageTitle>130 år med feriekoloni</PageTitle>
          <PageLead>
            <Text>Feriekolonien ble startet av Gina Aulie i 1890</Text>
          </PageLead>
        </HeroContent>
      </HeroImage>
    </Page>
  );
};

export default HistoryPage;
