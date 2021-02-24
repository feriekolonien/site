module.exports = {
  env: {
    SANITY_DATASET: 'development',
    SANITY_PROJECT_ID: 'bvwemm0b',
  },
  async rewrites() {
    return [
      {
        source: '/bee.js',
        destination: 'https://cdn.splitbee.io/sb.js',
      },
      {
        source: '/_hive/:slug',
        destination: 'https://hive.splitbee.io/:slug',
      },
    ];
  },
};
