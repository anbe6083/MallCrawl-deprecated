const passport = require('passport');
const TwitterStrategy = require('passport-twitter');
const keys = require('./keys.js');
const User = require('../models/user-models');

passport.serializeUser((user, done) => {
    //mongo id, not twitter id
    done(null,user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(new TwitterStrategy(
    {
        consumerKey: keys.twitter.consumerKey,
        consumerSecret: keys.twitter.consumerSecret,
        callbackURL: "/auth/twitter/redirect"
    },
    function (token, tokenSecret, profile, done) {
        //check if a user exists
        User.findOne({
            twitterId: profile.id
        }).then((currentUser) => {
            if (currentUser) {
                //The user already authenticated. Create a cookie
                console.log('user is:' +currentUser);
                done(null,currentUser);
            } else {
                //else, create new user
                new User({
                    name: profile['username'],
                    twitterId: profile.id
                }).save().then((newUser) => {
                    //new user created, create a cookie
                    console.log('new user created ' + newUser);
                    done(null,newUser);
                });
            }
        });
        
        /*User.findOrCreate({ twitterId: profile.id }, function (err, user) {
            return cb(err, user);
        });*/
    }
));