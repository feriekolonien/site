import Page from "../components/Page";
import {
  PageTitle,
  CTA,
  PageContent,
  Text
} from "../components/PageComponents";
import Footer from "../components/Footer";
import Countdown from "../components/Countdown";
import Navigation from "../components/Navigation";

function ApplicationPage() {
  return (
    <Page title="Søknadsskjema">
      <Navigation color="black" />
      <PageContent>
        <div className="tc">
          <PageTitle>Søknadsskjema</PageTitle>
          <Text>TODO</Text>
          <Countdown />
          <CTA>Søknadsskjema</CTA>
        </div>
      </PageContent>
      <Footer />
    </Page>
  );
}

export default ApplicationPage;
