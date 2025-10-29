const mongoose = require('mongoose');

const CareerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  resumeUrl: String,
  position: String,
  coverLetter: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Career', CareerSchema);
