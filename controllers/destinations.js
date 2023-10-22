const Flight = require('../models/flight');

module.exports = {
    create
};
  
async function create(req, res) {
    const flight = await Flight.findById(req.params._id);
    try {
        flight.destination.push({
            destination: req.body.destination,
            arrivalDate: new Date(req.body.arrivalDate),
        });
        await flight.save();
        res.redirect(`/flights/${flight._id}`);
    } catch (err) {
        console.log(err);
    }
}