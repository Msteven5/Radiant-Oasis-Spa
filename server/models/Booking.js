const mongoose = require('mongoose');


const { Schema } = mongoose;



const bookingSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  serviceId: {
    type: String,
    required: true
  },
  addOnId: {
    type: String,
  },
  staffId: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});


const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;