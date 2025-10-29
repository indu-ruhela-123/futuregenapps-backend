const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String],
  url: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
