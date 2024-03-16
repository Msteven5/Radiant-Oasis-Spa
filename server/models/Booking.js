const mongoose = require('mongoose')



const { Schema } = mongoose

const bookingSchema = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  service: [{
    type: Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  }],
  staff: {
    type: Schema.Types.ObjectId,
    ref: 'Staff',
    required: true
  },
  date:{
    type: String,
    required: true
  },
  time: {
    type: String,
    requried: true
  },
  phoneNumber: {
    type: String
  }

});

const Booking = mongoose.model('Booking', bookingSchema)
module.exports = Booking