var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var now = new Date();
  var date = {};
  date.utc = now.toString();
  date.iso= now.toISOString();
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify(date));
});

module.exports = router;
