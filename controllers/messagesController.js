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
  console.log('req.body', req.body.statusNew)
  const messageId = req.params.id;
  
  const message = await Messages.findOneAndUpdate({_id: messageId}, {statusNew: false}, {new: true});
  console.log('message', message)
  if (!message) {
    return res.status(400).json({message: `No Message found!`});
  }
  res.status(200).json({message: 'Message details changed successfully'});
  
};

// module.exports.deleteLoadById = async (req, res) => {
//   const {role} = req.payload;
//   const loadId = req.params.id;
//   if (role === 'SHIPPER') {
//   const load = await Load.remove({_id: loadId});
//   if (!load) {
//     return res.status(400).json({message: `No Load found!`});
//   }
//   res.status(200).json({message: 'Load deleted successfully'});
//   }
// };

// module.exports.postLoadById = async (req, res) => {
//   const {role} = req.payload;
//   if (role === 'SHIPPER') {
//   const loadId = req.params.id;
//   console.log(loadId)
//   const truck = await Truck.findOneAndUpdate({assigned_to: null}, {assigned_to: loadId}, {new: true})
//   console.log(truck)
//   if (truck) {
//     await Load.findOneAndUpdate({_id: loadId}, {assigned_to: truck._id});
//     res.status(200).json({
//       "message": "Load posted successfully",
//       "driver_found": true
//     });
//   } else {
//     res.status(200).json({
//       "message": "Driver not found",
//       "driver_found": false
//     });
//   }
//   }
// };

// module.exports.getShippingInfoById = async (req, res) => {
//   const loadId = req.params.id;
//   const load = await Load.findOne({_id: loadId});
//   if (!load) {
//     return res.status(400).json({message: `No Loads found!`});
//   }
//   res.status(200).json({'load': load});
// };