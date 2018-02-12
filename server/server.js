const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const authRoutes = require('./routes/auth-routes');
//Dependencies for yelp api
const yelp = require('yelp-fusion');
const apiKey = 'C4ISuj5muP0yv491qqKBna0j-hH6FL4g2iq1-5lbJQglSEGwIZ-s9eY0fjVJkQ9iRBhNY5vsDiBQZz98UF0Eepu0gkgTxIm_mkFR1u3dUdlp5ragp7WjfZAlsBh6WnYx';
const client = yelp.client(apiKey);
const passport = require('passport');

//mongoDB
const mongoose = require('mongoose');
const keys = require('../config/keys');

//connect to mongoDB
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log('connected to mongodb');
})


//----Start dependencies for passport and twitter login

const passportSetup = require('../config/passport-setup');
const routes = require('./routes/index');
const users = require('./routes/users');

//View Engine
app.set('view engine', 'ejs');

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'secret', resave: true, saveUninitialized: true }));


// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/', routes);
app.use('/users', users);
app.use('/auth', authRoutes);

//make a promise for the business info from the Yelp API
let businesses = client.search({
  term: 'bars',
  location: 'santa clarita, ca'
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