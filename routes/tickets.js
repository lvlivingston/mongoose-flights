const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// POST /movies/:id/reviews (create review for a movie)
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;