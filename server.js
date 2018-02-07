const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const yelp = require('yelp-fusion');
const apiKey = 'C4ISuj5muP0yv491qqKBna0j-hH6FL4g2iq1-5lbJQglSEGwIZ-s9eY0fjVJkQ9iRBhNY5vsDiBQZz98UF0Eepu0gkgTxIm_mkFR1u3dUdlp5ragp7WjfZAlsBh6WnYx';

const client = yelp.client(apiKey);

//make a promise for the business info from the Yelp API
let businesses = client.search({
  term: 'bars',
  location: 'san francisco, ca'
}).then(response => {
  /*let reviews = client.reviews(response.jsonBody.businesses[0].id).then(response => {
    console.log(response.jsonBody.reviews[0].text);
    app.get('/api/yelp/reviews', (req, res) => {
      res.send(response.jsonBody.reviews[0]);
    })
  }).catch(error => {
    console.log(error);
  });*/
  app.get('/api/yelp', (req, res) => {
    res.send(response.jsonBody.businesses);
  });
}).catch(error => {
  console.log(error);
});

app.listen(port, () => console.log(`Listening on port ${port}`));