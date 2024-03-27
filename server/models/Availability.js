const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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


module.exports = availabilitySchema;

