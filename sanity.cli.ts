import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'bvwemm0b',
    dataset: 'production',
  },
  // Hosted at https://feriekolonien.sanity.studio
  studioHost: 'feriekolonien',
  deployment: {
    // Serve the latest v6 Sanity Studio modules without having to redeploy.
    autoUpdates: true,
  },
});
