import Page from "../components/Page";
import {
  PageTitle,
  CTA,
  PageContent,
  Text,
  FixedBackground,
  HeroContent,
  PageLead,
} from "../components/PageComponents";
import Footer from "../components/Footer";
import Countdown from "../components/Countdown";
import Navigation from "../components/Navigation";
import CampDates from '../components/CampDates';
import ApplicationForm from "../components/ApplicationForm";

function ApplicationPage() {
  return (
    <Page title="Søknadsskjema">
      <FixedBackground imageUrl="/static/img/IMG_5962.jpg">
        <Navigation color="white" />
        <HeroContent>
          <div className="tc">
            <PageTitle>Påmelding til sommeren 2020</PageTitle>
            <PageLead>
              <CampDates />
            </PageLead>
            <ApplicationForm />
          </div>
        </HeroContent>
      </FixedBackground>
      <Footer />
    </Page>
  );
}

export default ApplicationPage;
