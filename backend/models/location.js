const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
  propertyimage: String,
  address: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  bedroomsandbathrooms: { type: String, required: true },
  price: { type: String, required: true },
});


const location = mongoose.model('Location', locationSchema);
module.exports = location