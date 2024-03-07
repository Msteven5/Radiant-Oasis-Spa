const mongoose = require('mongoose');

const { Schema } = mongoose;

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true
  },
  addOn: [{
    type: Schema.Types.ObjectId,
    ref: 'AddOn'
  }],
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
