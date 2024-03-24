const { Schema } = require ('mongoose')

const availabilitySchema = new Schema({
  dayOfMonth: {
    type: String, 
    required: true
  },
  hour: {
    type: String, 
    required: true
  },
  available: {
    type: Boolean,
    default: true 
  }
});

module.exports = availabilitySchema;
