const mongoose = require('mongoose');

const { Schema } = mongoose;


const availabilitySchema = new Schema({
    fullDate: {
        type: String,
        required: true
    },
    hour:
    {
        type: String,
        required: true
    },
    available: 
    {
        type: Boolean,
        default: true
    }
});

const Availability = mongoose.model('Availability', availabilitySchema)

module.exports = Availability;

