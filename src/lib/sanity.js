import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'bvwemm0b',
  dataset: 'development',
  // token: 'sanity-auth-token', // or leave blank to be anonymous user
  // useCdn: true, // `false` if you want to ensure fresh data
});

// Get a pre-configured url-builder from your sanity client
export const urlBuilder = imageUrlBuilder(client);
