const mongoose = require('mongoose');

const peoplesSchema = new mongoose.Schema({
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

module.exports.Peoples = mongoose.model('Peoples', peoplesSchema);
