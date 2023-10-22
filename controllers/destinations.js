const Destination = require('../models/destinations');
const Flight = require('../models/flight');

module.exports = {
    new: addDestination,
    create
};
  

// async function show(req, res) {
//     const flight = await Flight.findById(req.params.id);
//     res.render('flights/show', { title: 'Flight Details', flight });
// }

// function newDestination(req, res) {
//     res.render(`/flights/${flight._id}`, { title: 'Add Destination', errorMsg: '' });
// }

async function create(req, res) {
    const flight = await Flight.findById(req.params._id);
    try {
        flight.destination.push({
            destination: req.body.destination,
            arrivalDate: new Date(req.body.arrivalDate),
        });
        await Flight.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${flight._id}`);
}


async function addDestination(req, res) {
    const flight = await Flight.findById(req.params.id);
    // the cast array holds the performer's ObjectID (referencing)
    // console.log(movie);
    flight.destination.push(req.body.flightId);
    // console.log(movie.cast.push);
    console.log(req.body);
    await flight.save();
    // console.log(movie.save);
    res.redirect(`/flights/${flight._id}`);
  }