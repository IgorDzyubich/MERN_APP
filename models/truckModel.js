const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
  created_by: {
    type: String,
  },
  assigned_to: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'IS',
  },
  created_date: {
    type: String,
    default: new Date().toISOString(),
  },
});

module.exports.Truck = mongoose.model('Truck', truckSchema);
