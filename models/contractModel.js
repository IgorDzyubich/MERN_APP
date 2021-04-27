const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  Date: {
    type: String,
  },
  Number: {
    type: Number,
  },
  Address: {
    type: String,
  },
  BuildNumber: {
    type: Number,
  },
  Section: {
    type: Number,
  },
  CloseDate: {
    type: String,
  },
  TrueCloseDate: {
    type: String,
  },
  ActDate: {
    type: String,
  },
  PaymentDate: {
    type: String,
  },
  District: {
    type: String,
  },
  ContractType: {
    type: String,
  },
});

module.exports.Contract = mongoose.model('Contract', contractSchema);
