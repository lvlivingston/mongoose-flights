const Flight = require('../models/flight');

module.exports = {
    create
};

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    // flight.destination = flight.destination || [];
    try {
        // probably need to massage the data more to get it to show up in the below boxes and in the cloud
        flight.destination.push({
            destination: req.body.destination,
            arrivalDate: new Date(req.body.arrivalDate),
            arrivalTime: new Date(req.body.arrivalTime)
        });
        await flight.save();
        res.redirect(`/flights/${flight._id}`);
    } catch (err) {
        console.log(err);
    }
}