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
    //if (!req.user) {
        res.render('login', {
            title: 'Login',
            //messages: req.flash('loginMessage')
            //displayName: req.user ? req.user.displayName : ''
        });
    //} else {
    //    return res.redirect('/users');
    //}
});

/* GET update page. */
router.get('/register', function(req, res, next) {
    res.render('register', {
        title: 'Register'
    });
});

/* GET business page. */
router.get('/business', function(req, res, next) {
    res.render('business', {
        title: 'Business'
    });
});

module.exports = router;