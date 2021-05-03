const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
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
    default: 'This is Messages example for my App',
  },
  created_date: {
    type: String,
    default: new Date().toISOString()
  }
});

module.exports.Messages = mongoose.model('Messages', messagesSchema);
