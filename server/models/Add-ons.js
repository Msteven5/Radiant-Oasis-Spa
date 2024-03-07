const mongoose = require('mongoose');

const { Schema } = mongoose;

const addOnSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true
  }
});

const AddOn = mongoose.model('addOn', addOnSchema);

module.exports = AddOn;
