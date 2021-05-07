import Page from '../components/Page';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Text } from '../components/Text';
import { PageTitle } from '../components/PageTitle';
import { PageContent } from '../components/PageContent';
import {
  AddressLink,
  Phone,
  Office,
  AddressLine,
} from '../components/AddressComponents';

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
              Tlf:{' '}
              <Phone title="Ring feriekoloniens fasttelefon">32796542</Phone>{' '}
              <span className="fw4">|</span>{' '}
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
              Tlf: <Phone title="Ring Elin">48111106</Phone> (Elin)
            </div>
          </Office>
        </div>
        <iframe
          title="Påmeldingsskjema"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1010.3920560176697!2d10.615535!3d59.570004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x925117cbcb2e407!2sTrefoldighet%20Feriekoloni!5e0!3m2!1sen!2sus!4v1574633386221!5m2!1sen!2sus"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
        />
      </PageContent>
      <Footer />
    </Page>
  );
};

export default ContactPage;
