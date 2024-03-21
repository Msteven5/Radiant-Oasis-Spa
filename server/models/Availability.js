const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  dayOfWeek: {
    type: Number, 
    required: true
  },
  hour: {
    type: Number, 
    required: true
  },
  available: {
    type: Boolean,
    default: true 
  }
});

module.exports = availabilitySchema;
