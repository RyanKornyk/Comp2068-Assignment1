var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

/* GET profile page. */
router.get('/', function(req, res, next) {
  res.render('profile', { title: 'Profile' });
});

/* GET service page. */
router.get('/', function(req, res, next) {
  res.render('service', { title: 'Service' });
});
module.exports = router;
