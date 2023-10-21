const express = require('express');
const router = express.Router();

// create constroller module
const flightsCtrl = require('../controllers/flights')

// ALL ROUTES DEFAULT TO /flights

// GET route for /flights
router.get('/', flightsCtrl.index);
// GET route for /flights/new
router.get('/new', flightsCtrl.new);
// GET /flights/:id
router.get('/:id', flightsCtrl.show);
// POST route to /flights
router.post('/', flightsCtrl.create);


module.exports = router;