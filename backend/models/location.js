const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
  propertyimage: String,
  address: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  bedroomsandbathrooms: { type: String, required: true },
  price: { type: String, required: true },
  applynow: [{type: mongoose.Schema.Types.ObjectId, ref: 'apply'}]
});

module.exports = mongoose.model('Locations', locationSchema);