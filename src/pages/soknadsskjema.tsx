import Page from '../components/Page';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ApplicationForm from '../components/ApplicationForm';

function ApplicationPage() {
  return (
    <Page title="Søknadsskjema">
      <div className="flex h-screen flex-col">
        <div className="w-full">
          <Navigation />
        </div>
        <div className="-mx-4 flex flex-auto flex-col">
          <ApplicationForm />
          <Footer />
        </div>
      </div>
    </Page>
  );
}

export default ApplicationPage;
