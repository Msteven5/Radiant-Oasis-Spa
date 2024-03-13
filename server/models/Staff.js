const mongoose = require('mongoose');

const { Schema } = mongoose;

const staffSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  services: [{
    type: Schema.Types.ObjectId,
    ref: 'Service', 
    required: true,
  }],
  hours: [{
    type: String,
    required: true
  }]
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
