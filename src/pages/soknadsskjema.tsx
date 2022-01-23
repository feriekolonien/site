import Page from '../components/Page';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ApplicationForm from '../components/ApplicationForm';

function ApplicationPage() {
  return (
    <Page title="Søknadsskjema">
      <div className="h-screen flex flex-col">
        <div className="w-full">
          <Navigation />
        </div>
        <div className="flex-auto flex flex-col">
          <ApplicationForm />
          <Footer />
        </div>
      </div>
    </Page>
  );
}

export default ApplicationPage;
