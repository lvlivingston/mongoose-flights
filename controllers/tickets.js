const Ticket = require('../models/ticket')
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
};

async function newTicket(req, res) {
  res.render('tickets/new', { title: 'Add Ticket', ticketId: req.params.id })
}

async function create(req, res) {
  try {
    req.body.flight = req.params.id
    console.log(req.body)
    await Ticket.create(req.body)
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/flights/${req.params.id}`)
}