var express = require('express');
const fs = require('fs');
const shifts = require('..data/shifts.json');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: shifts });
});

module.exports = router;
