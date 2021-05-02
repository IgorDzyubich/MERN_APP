const {Friends} = require('../models/friendsModel');

module.exports.addFriends = async (req, res) => {
  const {first_name, email } = req.body
  const friend = new Friends({
    first_name, email
  });
  await friend.save();
  res.status(200).json({message: 'Friends created successfully'});
};

module.exports.getFriends = async (req, res) => {
  const friends = await Friends.find({});
  if (!friends) {
    return res.status(400).json({message: `No friends found!`});
  }
  res.status(200).json({'friends': friends});
};

module.exports.deleteFriends = async (req, res) => {
  console.log(req.params)
  const friendsId = req.params.id;
  const friends = await Friends.deleteOne({'_id': friendsId});
  
  if (!friends) {
    return res.status(400).json({message: `No friends with id 
    '${friendsId}' found!`});
  }
  res.status(200).json({message: 'Friends Profile deleted successfully'});
};
