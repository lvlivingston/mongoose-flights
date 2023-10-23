const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
      type: String,
      match: /[A-F][1-9]\d?/,
      required: true
    },
    price: {
      type: Number,
      min: 0,
      required: true
    }
}, {
    flight: {
      type: Schema.Types.ObjectId,
      ref: 'Flight',
      required: true
    }
});

const destinationsSchema = new Schema({
    destination: {
        type: String,
        enum: ['(ATL) Atlanta, GA', '(AUS) Austin, TX', '(DFW) Dallas, TX', '(DEN) Denver, CO', '(JFK) New York, NY', '(LAX) Los Angeles, CA', '(MCO) Orlando, FL','(MIA) Miami, FL', '(SAN) San Francisco, CA', '(SEA) Seattle, WA', '(SFO) San Francisco, CA'],
        // default: 'N/A'
    },
    arrivalDate: {
        type: Date,
        // default: 'N/A'
    },
}, {
    timestamps: true
})

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Frontier', 'Southwest', 'Spirit', 'United'],
        // default: 'N/A'
    },
    airport: {
        type: String,
        enum: ['(ATL) Atlanta, GA', '(AUS) Austin, TX', '(DFW) Dallas, TX', '(DEN) Denver, CO', '(JFK) New York, NY', '(LAX) Los Angeles, CA', '(MCO) Orlando, FL','(MIA) Miami, FL', '(SAN) San Francisco, CA', '(SEA) Seattle, WA', '(SFO) San Francisco, CA'],
        default: '(DEN) Denver, CO'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        default: null
    }, 
    departureDate: {
        type: Date,
        default: function() {
            const oneYearFromNow = new Date(this.createdDate);
            oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
            return oneYearFromNow;
        }
    },  
    departureTime: {
        type: String,
        default: null
    },  
    destination: [destinationsSchema]
}, {
    timestamps: true    
}
);

module.exports = mongoose.model('Flight', flightSchema);