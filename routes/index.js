const express = require('express');
const router = express.Router();

// Set Home Route
router.get('/', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;