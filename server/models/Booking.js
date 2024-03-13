const mongoose = require('mongoose');


const { Schema } = mongoose;



const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  service: [{
    type: Schema.Types.ObjectId,
    ref: 'Service',
    required: true,

  }],
  staff: {
    type: Schema.Types.ObjectId,
    ref: 'Staff',
  },
  phoneNumber: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});


const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;