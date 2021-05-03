const {Messages} = require('../models/messagesModel');

module.exports.getMessages = async (req, res) => {
  const messages = await Messages.find({});
  if (!messages) {
    return res.status(400).json({message: `No messages found!`});
  }
  res.status(200).json({messages});
};

module.exports.postMessages = async (req, res) => {
  const {created_by, assigned_to, statusNew, message, created_date} = req.body;
  const messages = new Messages({
    created_by, assigned_to, statusNew, message, created_date
  })
  await messages.save();
  return res.status(200).json({message: 'Messages created successfully'});
};

module.exports.changeMessages = async (req, res) => {
  const messageId = req.params.id;
  const message = await Messages.findOneAndUpdate({_id: messageId}, {statusNew: false}, {new: true});
  if (!message) {
    return res.status(400).json({message: `No Message found!`});
  }
  res.status(200).json({message: 'Message details changed successfully'});
};