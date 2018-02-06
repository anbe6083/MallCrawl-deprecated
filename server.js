const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'C4ISuj5muP0yv491qqKBna0j-hH6FL4g2iq1-5lbJQglSEGwIZ-s9eY0fjVJkQ9iRBhNY5vsDiBQZz98UF0Eepu0gkgTxIm_mkFR1u3dUdlp5ragp7WjfZAlsBh6WnYx';

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});