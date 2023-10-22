const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    show,
    create,
    // update
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
}

function newFlight(req, res) {
    // let nowDate = Date.now() + 60000 * 60 * 24 * 365;
    // nowDate = new Date(nowDate);
    res.render('flights/new', { title: 'Add Flight', errorMsg: '' });
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    console.log(flight.destination);
    res.render('flights/show', { title: 'Flight Details', flight });
}

async function create (req, res) {
    req.body.flightNo = req.body.flightNo.trim();
    // const inputDate = new Date(req.body.departs);
    // const formattedDeparts = formatDate(inputDate);
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', {errorMsg: err.message});
    }
}

// async function update(req, res) {
//     const flight = await Flight.findById(req.params.id);
//     req.body.arrivalDate += 'T00:00';
//     // flight.destination = flight.destination || [];
//     console.log(req.body)
//     try {
//         // probably need to massage the data more to get it to show up in the below boxes and in the cloud
//         flight.destination.push(req.body);
//         await flight.save();
//         res.redirect(`/flights/${flight._id}`);
//     } catch (err) {
//         console.log(err);
//     }
// }