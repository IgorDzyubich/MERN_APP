const {Load} = require('../models/loadModel');
const {Truck} = require('../models/truckModel')

module.exports.getLoads = async (req, res) => {
  console.log('payload: ', req.payload)
  const userId = req.payload._id;
  if (!userId) {
    return res.status(400).json({message: `No user with username 
    '${req.payload.username}' found!`});
  }
  const loads = await Load.find({'created_by': userId});
  if (!loads) {
    return res.status(400).json({message: `No loads found!`});
  }
  res.status(200).json({'loads': loads});
};

module.exports.postLoad = async (req, res) => {
  const {name, payload, pickup_address, delivery_address, 
    dimensions} = req.body;
  const {userEmail, role} = req.payload;
  console.log('Role: ', role)
  console.log('req.body: ', req.body)
  if (!userEmail) {
    return res.status(400).json({message: `No user with email '${userEmail}' 
    found!`});
  }
  if (role === 'SHIPPER') {
    const load = new Load({
      'created_by': req.payload._id,
      'name': name, 
      'payload': payload, 
      'pickup_address': pickup_address, 
      'delivery_address': delivery_address, 
      'dimensions': dimensions,
      'logs': [{
        'message': 'Load created',
        'time': new Date().toISOString()
      }]
    });
    await load.save();
    return res.status(200).json({message: 'Load created successfully'});
  }
  res.status(400).json({message: `You can not create Load, wrong role '${role}' !`});
};

module.exports.getLoadActive = async (req, res) => {
  const {role, _id} = req.payload;
  console.log('Role: ', role)
  console.log('ID: ', _id)
  if (role === 'DRIVER') {
    const activeLoad = await Load.findOne({status: 'NEW'})
    return res.status(200).json({load: activeLoad});
  }
  res.status(400).json({message: `Wrong role '${role}' !`});
};

module.exports.getLoadActiveState = async (req, res) => {
  const {role, _id} = req.payload;
  const state = ['En route to Pick Up', 'Arrived to Pick Up', 'En route to delivery', 'Arrived to delivery' ]
  console.log('Role: ', role)
  console.log('req.body: ', req.body)
  if (role === 'DRIVER') {
    const activeLoad = await Load.findOne({status: 'NEW'})
    let index = state.findIndex(el => el === activeLoad.state)
    activeLoad.state = state[index+1]
    return res.status(200).json({
      message: `Load state changed to ${activeLoad.state}`
    });
  }
  res.status(400).json({message: `Wrong role '${role}' !`});
};

module.exports.getLoadById = async (req, res) => {
  const loadId = req.params.id;
  const load = await Load.findOne({_id: loadId});
  if (!load) {
    return res.status(400).json({message: `No Loads found!`});
  }
  res.status(200).json({'load': load});
};

module.exports.putLoadById = async (req, res) => {
  const {role} = req.payload;
  const {updateLoad} = req.body;
  const loadId = req.params.id;
  if (role === 'SHIPPER') {
  const load = await Load.findOneAndUpdate({_id: loadId}, {...updateLoad});
  if (!load) {
    return res.status(400).json({message: `No Load found!`});
  }
  res.status(200).json({message: 'Load details changed successfully'});
  }
};

module.exports.deleteLoadById = async (req, res) => {
  const {role} = req.payload;
  const loadId = req.params.id;
  if (role === 'SHIPPER') {
  const load = await Load.remove({_id: loadId});
  if (!load) {
    return res.status(400).json({message: `No Load found!`});
  }
  res.status(200).json({message: 'Load deleted successfully'});
  }
};

module.exports.postLoadById = async (req, res) => {
  const {role} = req.payload;
  if (role === 'SHIPPER') {
  const loadId = req.params.id;
  console.log(loadId)
  const truck = await Truck.findOneAndUpdate({assigned_to: null}, {assigned_to: loadId}, {new: true})
  console.log(truck)
  if (truck) {
    await Load.findOneAndUpdate({_id: loadId}, {assigned_to: truck._id});
    res.status(200).json({
      "message": "Load posted successfully",
      "driver_found": true
    });
  } else {
    res.status(200).json({
      "message": "Driver not found",
      "driver_found": false
    });
  }
  }
};

module.exports.getShippingInfoById = async (req, res) => {
  const loadId = req.params.id;
  const load = await Load.findOne({_id: loadId});
  if (!load) {
    return res.status(400).json({message: `No Loads found!`});
  }
  res.status(200).json({'load': load});
};