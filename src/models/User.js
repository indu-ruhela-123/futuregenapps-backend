const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // hashed
  role: { type: String, default: 'admin' }
});

module.exports = mongoose.model('User', UserSchema);
