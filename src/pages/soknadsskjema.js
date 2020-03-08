import Page from '../components/Page';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ApplicationForm from '../components/ApplicationForm';

function ApplicationPage() {
  return (
    <Page title="Søknadsskjema">
      <div className="flex flex-column vh-100">
        <Navigation color="black" />
        <div className="flex-auto flex flex-column">
          <ApplicationForm />
        </div>
        <Footer />
      </div>
    </Page>
  );
}

export default ApplicationPage;
