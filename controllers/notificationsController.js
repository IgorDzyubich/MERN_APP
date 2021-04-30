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

// module.exports.getLoadActive = async (req, res) => {
//   const {role, _id} = req.payload;
//   console.log('Role: ', role)
//   console.log('ID: ', _id)
//   if (role === 'DRIVER') {
//     const activeLoad = await Load.findOne({status: 'NEW'})
//     return res.status(200).json({load: activeLoad});
//   }
//   res.status(400).json({message: `Wrong role '${role}' !`});
// };

// module.exports.getLoadActiveState = async (req, res) => {
//   const {role, _id} = req.payload;
//   const state = ['En route to Pick Up', 'Arrived to Pick Up', 'En route to delivery', 'Arrived to delivery' ]
//   console.log('Role: ', role)
//   console.log('req.body: ', req.body)
//   if (role === 'DRIVER') {
//     const activeLoad = await Load.findOne({status: 'NEW'})
//     let index = state.findIndex(el => el === activeLoad.state)
//     activeLoad.state = state[index+1]
//     return res.status(200).json({
//       message: `Load state changed to ${activeLoad.state}`
//     });
//   }
//   res.status(400).json({message: `Wrong role '${role}' !`});
// };

// module.exports.getLoadById = async (req, res) => {
//   const loadId = req.params.id;
//   const load = await Load.findOne({_id: loadId});
//   if (!load) {
//     return res.status(400).json({message: `No Loads found!`});
//   }
//   res.status(200).json({'load': load});
// };

// module.exports.putLoadById = async (req, res) => {
//   const {role} = req.payload;
//   const {updateLoad} = req.body;
//   const loadId = req.params.id;
//   if (role === 'SHIPPER') {
//   const load = await Load.findOneAndUpdate({_id: loadId}, {...updateLoad});
//   if (!load) {
//     return res.status(400).json({message: `No Load found!`});
//   }
//   res.status(200).json({message: 'Load details changed successfully'});
//   }
// };

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