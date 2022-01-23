import Page from '../components/Page';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { AddressLink, Phone } from '../components/AddressComponents';

const ContactPage = () => (
  <Page title="Kontaktinfo">
    <Navigation color="black" />
    <div className="max-w-4xl mx-auto pt-20 pb-20 sm:pt-24 px-4 sm:px-6 md:px-8">
      <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-5">
        Kontaktinfo
      </h1>
      <p className="text-lg mb-5">
        Vi er stort sett på feriekolonien hele sommeren, resten av året finner
        du oss i Oslo.
      </p>

      <div className="grid grid-cols-1 gap-8 pt-8 mb-11 sm:grid-cols-2">
        <div className="space-y-2">
          <h3 className="font-bold text-2xl">Filtvet Feriekoloni</h3>
          <p>Trefoldighet Feriekoloni Stranda 16</p>
          <p>Postboks 3, 3480 Filtvet</p>
          <p>
            Tlf: <Phone title="Ring feriekoloniens fasttelefon">32796542</Phone>{' '}
            <span className="">|</span>{' '}
            <Phone title="Ring feriekoloniens andre fasttelefon">
              32796270
            </Phone>
          </p>
          <p>
            <AddressLink href="mailTo:feriekolonien@feriekolonien.no">
              feriekolonien@feriekolonien.no
            </AddressLink>
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-2xl">Oslo</h3>
          <p>Trefoldighet Feriekoloni Postboks 6929</p>
          <p>St. Olavs Plass, 0130 Oslo</p>

          <p>
            Tlf:{' '}
            <Phone type="cell" title="Ring Elin">
              48111106
            </Phone>{' '}
            (Elin)
          </p>
        </div>
      </div>
      <iframe
        title="Påmeldingsskjema"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1010.3920560176697!2d10.615535!3d59.570004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x925117cbcb2e407!2sTrefoldighet%20Feriekoloni!5e0!3m2!1sen!2sus!4v1574633386221!5m2!1sen!2sus"
        width="100%"
        height="400"
        frameBorder="0"
        className="rounded-xl"
        style={{ border: 0 }}
      />
    </div>
    <Footer />
  </Page>
);

export default ContactPage;
