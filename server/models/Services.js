const mongoose = require('mongoose');

const { Schema } = mongoose;

const serviceSchema = new Schema({
  serviceName: {
    type: String,
    required: true,
    trim: true,
  },
  servicePrice: {
    type: Number,
    required: true
  },
  addOn: [addOnSchema],
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
