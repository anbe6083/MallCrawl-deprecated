const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const yelp = require('yelp-fusion');
const apiKey = 'C4ISuj5muP0yv491qqKBna0j-hH6FL4g2iq1-5lbJQglSEGwIZ-s9eY0fjVJkQ9iRBhNY5vsDiBQZz98UF0Eepu0gkgTxIm_mkFR1u3dUdlp5ragp7WjfZAlsBh6WnYx';

const client = yelp.client(apiKey);

let businesses = client.search({
 term:'Four Barrel Coffee',
 location: 'san francisco, ca'
}).then(response => {
 console.log(response.jsonBody.businesses[0]);
 app.get('/api/hello', (req, res) => {
  console.log(response.jsonBody.businesses[0]);
  res.send(response.jsonBody.businesses[0]);
});
}).catch(e => {
 console.log(e);
});

app.listen(port, () => console.log(`Listening on port ${port}`));