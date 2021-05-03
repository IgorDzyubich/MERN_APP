const {Notifications} = require('../models/notificationsModel');

module.exports.getNotifications = async (req, res) => {
  const notifications = await Notifications.find({});
  if (!notifications) {
    return res.status(400).json({message: `No notifications found!`});
  }
  res.status(200).json({notifications});
};

module.exports.postNotifications = async (req, res) => {
  const {created_by, assigned_to, statusNew, message, created_date} = req.body;
  const notifications = new Notifications({
    created_by, assigned_to, statusNew, message, created_date
  })
  await notifications.save();
  return res.status(200).json({message: 'Notifications created successfully'});
};

module.exports.changeNotifications = async (req, res) => {
  const noteId = req.params.id;
  const note = await Notifications.findOneAndUpdate({_id: noteId}, {statusNew: false}, {new: true});
  if (!note) {
    return res.status(400).json({message: `No Note found!`});
  }
  res.status(200).json({message: 'Note details changed successfully'});
};
