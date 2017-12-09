const express = require('express');
const router = express.Router();

// Set Tasks Route
router.get('/tasks', function(req, res, next) {
  res.send('Hello from tasks API :)');
});

module.exports = router;