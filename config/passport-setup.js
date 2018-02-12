const passport = require('passport');
const TwitterStrategy = require('passport-twitter');
const keys = require('./keys.js');
passport.use(new TwitterStrategy(
    {   
        consumerKey: keys.twitter.consumerKey,
        consumerSecret: keys.twitter.consumerSecret,
        callbackURL: "/auth/twitter/redirect"
    },
    function (token, tokenSecret, profile, cb) {
        User.findOrCreate({ twitterId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));