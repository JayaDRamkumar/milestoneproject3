const mongoose = require('mongoose');

const applySchema = new mongoose.Schema({
  applicantsname: { type: String, require: true },
  phonenumber: { type: String, require: true },
  over18: { type: String, require: true },
  socialsecurity: { type: String, require: true },
});

module.exports = mongoose.model('Apply', applySchema);
