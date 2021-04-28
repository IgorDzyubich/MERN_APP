const mongoose = require('mongoose');

const friendsSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  first_name: {
    type: String,
  },
  second_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
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
});

module.exports.Friends = mongoose.model('Friends', friendsSchema);
