var express = require('express');
var router  = express.Router();
fun = require('../controller/fun');
router.get('/name/:na/:email/:em', fun.getName);
router.get('/id/:id', fun.getUName);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;