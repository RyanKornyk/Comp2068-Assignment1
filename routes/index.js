var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET randome page */
router.get('/random', function(req,res,next){
    
    var ranNum = Math.random();
    
    res.render('random',{title: 'Random', ranNum: ranNum});
    
});

module.exports = router;
