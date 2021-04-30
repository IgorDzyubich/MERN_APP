const mongoose = require('mongoose');

const notificationsSchema = new mongoose.Schema({
  created_by: {
    type: String
  },
  assigned_to: {
    type: String,
    default: null
  },
  statusNew: {
    type: Boolean,
    default: true,
  },
  message: {
    type: String,
    default: 'Notifications example',
  },
  created_date: {
    type: String,
    default: new Date().toISOString()
  }
});

module.exports.Notifications = mongoose.model('Notifications', notificationsSchema);
