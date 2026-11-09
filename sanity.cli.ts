import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'bvwemm0b',
    dataset: 'production',
  },
  // Hosted at https://feriekolonien.sanity.studio
  deployment: {
    appId: 'tzubdwvebmoht7vz45doxgud',
    // Serve the latest v6 Sanity Studio modules without having to redeploy.
    autoUpdates: true,
  },
});
