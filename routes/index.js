var express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Home'
    });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about', {
        title: 'About'
    });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', {
        title: 'Contact Me'
    });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
    res.render('profile', {
        title: 'Profile'
    });
});

/* GET service page. */
router.get('/service', function(req, res, next) {
    res.render('service', {
        title: 'Service'
    });
});

/* Render Login page. */
router.get('/login', function(req, res, next) {
    if (!req.user) {
        res.render('login', {
            title: 'Login',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    } else {
        return res.redirect('/users');
    }
});

/*Show Registration Page */
router.get('/register', function (req, res, next) {
    if (!req.user) {
        res.render('register', {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else {
        return res.redirect('/');
    }
});


/* POST signup data. */
router.post('/register', passport.authenticate('local-registration', {
    //Success go to Profile Page / Fail go to Signup page
    successRedirect : '/users',
    failureRedirect : '/register',
    failureFlash : true
}));

/* GET business page. */
router.get('/business', function(req, res, next) {
    res.render('business', {
        title: 'Business'
    });
});

module.exports = router;