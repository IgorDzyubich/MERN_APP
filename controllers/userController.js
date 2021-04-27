const {User} = require('../models/userModel');
const {Credential} = require('../models/credentialModel');
const bcrypt = require('bcrypt');

module.exports.getUser = async (req, res) => {
  console.log('payload: ', req.payload);
  const userId = req.payload._id;
  const user = await User.findOne({_id: userId});
  if (!user) {
    return res.status(400).json({message: `No user with userId
    '${userId}' found!`});
  }
  res.status(200).json({'user': user});
};

module.exports.getUsers = async (req, res) => {
  const users = await User.find({});
  if (!users) {
    return res.status(400).json({message: `No users found!`});
  }
  res.status(200).json({'users': users});
};

module.exports.deleteUser = async (req, res) => {
  console.log('payload: ', req.payload);
  // const userId = req.payload._id;
  const user = await User.remove({'email': userEmail});
  await Credential.remove({'email': userEmail});
  if (!user) {
    return res.status(400).json({message: `No user with email 
    '${userEmail}' found!`});
  }
  res.status(200).json({message: 'Profile deleted successfully'});
};

module.exports.updateUser = async (req, res) => {
  const userEmail = req.payload.userEmail;
  const user = await Credential.findOneAndUpdate({
    'email': userEmail},
  {$set: {'password': await bcrypt.hash(req.body.newPassword, 10)}},
  {new: true});
  if (!user) {
    return res.status(400).json({message: `No user with email 
    '${userEmail}' found!`});
  }
  res.status(200).json({message: 'Password changed successfully'});
};
