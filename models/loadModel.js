const mongoose = require('mongoose');

const loadSchema = new mongoose.Schema({
  name: {
    type: String
  },
  created_by: {
    type: String
  },
  assigned_to: {
    type: String,
    default: null
  },
  status: {
    type: String,
    default: ['NEW', 'POSTED', 'ASSIGNED', 'SHIPPED' ][0],
  },
  state: {
    type: String,
    default: ['En route to Pick Up', 'Arrived to Pick Up', 'En route to delivery', 'Arrived to delivery' ][0],
  },
  payload: {
    type: Number
  },
  pickup_address: {
    type: String,
  },
  delivery_address: {
    type: String,
  },
  dimensions: {
    type: Object,
  },
  logs: {
    type: Array,
    default: [{
      message: 'Load created',
      time: new Date().toISOString(),
    }]
  },
  created_date: {
    type: String,
  }
});

module.exports.Load = mongoose.model('Load', loadSchema);
