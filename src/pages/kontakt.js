import Page from "../components/Page";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { PageTitle, PageContent, Text } from "../components/PageComponents";
import {
  AddressLink,
  Phone,
  Office,
  AddressLine
} from "../components/AddressComponents";

const ContactPage = () => {
  return (
    <Page title="Kontaktinfo">
      <Navigation color="black" />
      <PageContent>
        <PageTitle color="black">Kontaktinfo</PageTitle>
        <Text>
          Vi er stort sett på feriekoloien hele sommeren, resten av året finner
          du oss i Oslo.
        </Text>

        <div className="flex mb5">
          <Office>
            <b className="f5 f4-l fw6 dib mb3 mt4">Filtvet Feriekoloni</b>
            <AddressLine>Trefoldighet Feriekoloni Stranda 16</AddressLine>
            <AddressLine>Postboks 3, 3480 Filtvet</AddressLine>

            <div className="f5 fw6 pv3 black-70">
              Tlf:{" "}
              <Phone title="Ring feriekoloniens fasttelefon">32796270</Phone>{" "}
              <span className="fw4">|</span>{" "}
              <Phone title="Ring feriekoloniens andre fasttelefon">
                32796270
              </Phone>
            </div>
            <AddressLink href="mailTo:feriekolonien@feriekolonien.no">
              feriekolonien@feriekolonien.no
            </AddressLink>
          </Office>

          <Office>
            <b className="f5 f4-l fw6 dib mb3 mt4">Oslo</b>
            <AddressLine>Trefoldighet Feriekoloni Postboks 6929</AddressLine>
            <AddressLine>St. Olavs Plass, 0130 Oslo</AddressLine>

            <div className="f5 fw6 pv3 black-70">
              Elins tlf: <Phone title="Ring Elin">48111106</Phone>
            </div>
            <AddressLink href="mailTo:feriekolonien@feriekolonien.no">
              feriekolonien@feriekolonien.no
            </AddressLink>
          </Office>
        </div>
      </PageContent>
      <Footer />
    </Page>
  );
};

export default ContactPage;
