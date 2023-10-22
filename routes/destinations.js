const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// All routes in this file should start with '/' (root)

// GET /flights/:id
// router.get('/:id', flightsCtrl.show);
// POST route to /flights/:id/
router.post('/flights/:id/destinations',destinationsCtrl.create);

module.exports = router;
