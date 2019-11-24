import Page from "../../components/Page";
import {
  PageTitle,
  PageLead,
  HeroContent,
  HeroImage
} from "../../components/PageComponents";
import Navigation from "../../components/Navigation";

const History = () => {
  return (
    <Page title="Historien vår">
      <HeroImage>
        <Navigation />
        <HeroContent>
          <PageTitle>Historien vår</PageTitle>
        </HeroContent>
      </HeroImage>
    </Page>
  );
};

export default History;
