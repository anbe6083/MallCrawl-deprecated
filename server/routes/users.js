var express = require('express');
var router = express.Router();
var User = require('../models/user');
//Register route 

router.get('/register', (req, res) => {
    res.render('register');
});

//Register User
router.post('/register', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    let password2 = req.body.password2;

    //Validation
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
    let errors = req.validationErrors();    
    if(errors) {
        res.render('register', {
            errors: errors
        })
    } else {
        //new User is coming from the model
        let newUser = new User({
            name: name,
            email: email,
            username: username,
            password: password
        });

        User.createUser(newUser, (err, user) => {
            if(err) throw err;
            console.log(user);
        });
        req.flash('success_msg', 'You are now registered and can log in');
        res.redirect('/users/login');
    }
})

//Login Route
router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;