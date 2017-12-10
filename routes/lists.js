const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('lists', ['lists']);

// Get all tasks
router.get('/lists', function(req, res, next) {
  db.lists.find(function(err, lists) {
    if (err) {
      res.status(404);
      res.send(err);
    }
    res.json(lists);
  });
});

// Get single list
router.get('/lists/:id', function(req, res, next) {
  db.lists.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, list) {
    if (err) {
      res.status(404);
      res.send(err);
    }
    res.json(list);
  });
});

// Save lists
router.post('/lists', function(req, res, next) {
  let list = req.body;
  if (!list) {
    res.status(404);
    res.json({
      error: 'information is invalid'
    });
  } else {
    db.lists.save(list, function(err, list) {
      if (err) {
        res.status(404);
        res.send(err);
      }
      res.json(list);
    });
  }
});

// Delete list
router.delete('/lists/:id', function(req, res, next) {
  db.lists.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, list) {
    if (err) {
      res.status(404);
      res.send(err);
    }
    res.json(list);
  });
});

// Update list
router.put('/lists/:id', function(req, res, next) {
  let list = req.body.list;

  let updatedList = {};
  if (list) {
    updatedList = list;
    // Needed to prevent overwriting errors
    delete updatedList._id;
  }
  db.lists.update({_id: mongojs.ObjectId(req.params.id)}, updatedList, {}, function(err, list) {
    if (err) {
      res.status(404);
      res.send(err);
    }
    res.json(list);
  });
});

// Set lists Route (Original test route)
// router.get('/lists', function(req, res, next) {
//   res.send('Hello from lists API :)');
// });

module.exports = router;