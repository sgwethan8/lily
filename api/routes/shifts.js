var express = require('express');
const fs = require('fs');
var router = express.Router();

/* GET shifts page. */
router.get('/shifts', (req, res) => {
    res.send('Hello World!')
  })

module.exports = router;