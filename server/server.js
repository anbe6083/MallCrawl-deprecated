const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//Dependencies for yelp api
const yelp = require('yelp-fusion');
const apiKey = 'C4ISuj5muP0yv491qqKBna0j-hH6FL4g2iq1-5lbJQglSEGwIZ-s9eY0fjVJkQ9iRBhNY5vsDiBQZz98UF0Eepu0gkgTxIm_mkFR1u3dUdlp5ragp7WjfZAlsBh6WnYx';
const client = yelp.client(apiKey);

//----Start dependencies for login system
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/loginApp');
const db = mongoose.connection;

//---end dependencies for login system

const routes = require('./routes/index');
const users = require('./routes/users');

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({'defaultLayout': 'layout'}));
app.set('view engine', 'handlebars');

//BodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//Set Static folder
app.use(express.static(path.join(__dirname, 'public')));

//Express session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

const middlewareOptions = {
  errorFormatter: (param, msg, value) => {
    let namespace = param.split('.')
    , root    = namespace.shift()
    , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}
app.use(expressValidator(middlewareOptions));

//Passport init
app.use(passport.initialize());
app.use(passport.session());

//Connect flash
app.use(flash());
app.use( (req, res, next) => {
  //use globals with res.locals
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');

  //passport sets its own flash messages to error
  res.locals.error = req.flash('error');
  next();
} );

//routes
app.use('/', routes);
app.use('/users', users);

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