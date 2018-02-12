const router = require('express').Router();
const passport = require('passport');
//auth login
router.get('/login', (req, res) => {
    res.render('login');
});

//auth logout
router.get('/logout', (req, res) => {
    //handle with passport
    console.log('logging out');
    res.send('logging out');
})

//auth with google
router.get('/twitter', passport.authenticate('twitter',{
    scope: ['profile']
}));

//callback route for twitter to redirect to
router.get('/twitter/redirect', passport.authenticate('twitter'),(req, res) => {
    console.log('req.session' +req.session);

    res.send(req.user);
})

module.exports = router;