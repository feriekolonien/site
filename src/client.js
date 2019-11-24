const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "bvwemm0b",
  dataset: "development",
  useCdn: false
});

module.exports = client;
