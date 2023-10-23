const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    index,
    show,
    new: newFlight,
    create,
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id)
    const tickets = await Ticket.find({ flight: flight._id })
    console.log(tickets)
    res.render('flights/show', { title: 'Flight Detail', flight, tickets })
}

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' })
  }


  async function create(req, res) {
    try {
      await Flight.create(req.body)
      res.redirect('/flights/new')
    } catch (err) {
      console.log(err)
      res.render('flights/new', { errorMsg: err.message })
    }
}