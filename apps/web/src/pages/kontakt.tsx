import Page from '../components/Page';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { AddressLink, Phone } from '../components/AddressComponents';

const ContactPage = () => (
  <Page title="Kontaktinfo">
    <Navigation />
    <div className="mx-auto max-w-4xl px-4 pt-20 pb-20 sm:px-6 sm:pt-24 md:px-8">
      <h1 className="mb-5 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
        Kontaktinfo
      </h1>
      <p className="mb-5 text-lg">
        Vi er stort sett på feriekolonien hele sommeren, resten av året finner
        du oss i Oslo.
      </p>

      <div className="mb-11 grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Besøksaddresse</h3>
          <p>Trefoldighet Feriekoloni Stranda 16</p>
          <p>
            Tlf: <Phone title="Ring feriekoloniens fasttelefon">45830235</Phone>
          </p>
          <p>
            <AddressLink href="mailTo:feriekolonien@feriekolonien.no">
              feriekolonien@feriekolonien.no
            </AddressLink>
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Oslo</h3>
          <p>Trefoldighet Feriekoloni Postboks 6929</p>
          <p>0176, Oslo</p>

          <p>
            Tlf:{' '}
            <Phone type="cell" title="Ring Elin">
              48111106
            </Phone>{' '}
            (Elin)
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Postadresse</h3>
          <p>Trefoldighet Feriekoloni</p>
          <p>Postboks 3, 3482 Tofte</p>
        </div>
      </div>
      <iframe
        title="Feriekolonien"
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
