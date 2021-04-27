const {Truck} = require('../models/truckModel');

module.exports.getTrucks = async (req, res) => {
  console.log('payload: ', req.payload)
  const userId = req.payload._id;
  if (!userId) {
    return res.status(400).json({message: `No user with username 
    '${req.payload.username}' found!`});
  }
  const trucks = await Truck.find({'created_by': userId});
  if (!trucks) {
    return res.status(400).json({message: `No trucks found!`});
  }
  res.status(200).json({'trucks': trucks});
};

module.exports.postTruck = async (req, res) => {
  const {type} = req.body;
  const {userEmail, role} = req.payload;
  if (!userEmail) {
    return res.status(400).json({message: `No user with email '${userEmail}' 
    found!`});
  }
  if (role === 'DRIVER') {
    const truck = new Truck({
      created_by: req.payload._id,
      type,
    });
    await truck.save();
    res.status(200).json({message: 'Truck created successfully'});
  }
  res.status(400).json({message: `You can not create truck, wrong role '${role}' !`});
};

module.exports.getTruckById = async (req, res) => {
  const truckId = req.params.id;
  const truck = await Truck.find({_id: truckId});
  if (!truck) {
    return res.status(400).json({message: `No trucks found!`});
  }
  res.status(200).json({'truck': truck[0]});
};

module.exports.putTruckById = async (req, res) => {
  const {type} = req.body;
  const truckId = req.params.id;
  const truck = await Truck.findOneAndUpdate({_id: truckId},
      {$set: {'type': type}}, {new: true});
  if (!truck) {
    return res.status(400).json({message: `No truck found!`});
  }
  res.status(200).json({message: 'Truck details changed successfully'});
};

module.exports.deleteTruckById = async (req, res) => {
  const truckId = req.params.id;
  const truck = await Truck.remove({_id: truckId});
  if (!truck) {
    return res.status(400).json({message: `No truck found!`});
  }
  res.status(200).json({message: 'Truck deleted successfully'});
};

module.exports.postTruckAssignById = async (req, res) => {
  console.log(req.params)
  const truckId = req.params.id;
  const driverId = req.payload._id
  const truck = await Truck.find({_id: truckId});
  if (!truck[0]) {
    return res.status(400).json({message: `No truck found!`});
  }
  await Truck.findOneAndUpdate({_id: truckId}, {$set:
    {'assigned_to': driverId}}, {new: true});
  res.status(200).json({message: 'Truck assigned successfully'});
};
