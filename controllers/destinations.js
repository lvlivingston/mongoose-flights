const Flight = require('../models/flight');

module.exports = {
  create,
};

async function create(req, res) {
    console.log(req.body);
    const flight = await Flight.findById(req.params.id).populate('destination');
    // console.log(“Incoming data:“, req.body); // Check incoming data
    flight.destination.push(req.body);
    try {
    flight.save();
    // console.log(“Updated flight:“, flight); // Check updated flight object
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
    res.render('error', { errorMsg: 'Failed to add destination' });
  }
}