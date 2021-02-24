import Page from '../components/Page';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ApplicationForm from '../components/ApplicationForm';
import colors from '../styles/colors';

function ApplicationPage() {
  return (
    <Page title="Søknadsskjema">
      <div className="flex flex-column vh-100">
        <Navigation color="black" />
        <div className="flex-auto flex flex-column">
          <ApplicationForm />
        </div>
        <Footer bgColor={colors.primary} color="white" />
      </div>
    </Page>
  );
}

export default ApplicationPage;
