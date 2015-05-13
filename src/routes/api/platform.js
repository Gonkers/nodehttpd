var express = require('express');
var bonescript = require('octalbonescript');
var router = express.Router();

router.get('/', function(req, res, next) {
  bonescript.getPlatform(function (err, data) {
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
  });
});

module.exports = router;
