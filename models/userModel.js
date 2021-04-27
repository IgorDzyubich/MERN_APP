const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  first_name: {
    type: String,
  },
  second_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  ip_address: {
    type: String,
  },
  phone: {
    type: String,
  },
  region: {
    type: String,
  },
  address: {
    type: String,
  },
  department: {
    type: String,
  },
  role: {
    type: String,
  },
});

module.exports.User = mongoose.model('User', userSchema);
