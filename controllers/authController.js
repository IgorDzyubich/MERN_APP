/* eslint-disable indent */
/* eslint-disable max-len */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
// const {Credential} = require('../models/credentialModel');
const {User} = require('../models/userModel');

module.exports.login = async (req, res) => {
  try {
    const {email, password} = req.body;
    console.log('email: ', email, 'password: ', password);
    const user = await User.findOne({email});
    if (!user) {
      return res.status(400).json({
        message: `No user with email '${email}' 
    found!`});
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({message: `Wrong password!`});
    }
    // if (password !== user.password) {
    //   return res.status(400).json({message: `Wrong password!`});
    // }
    const token = jwt.sign({userEmail: email, _id: user._id},
        JWT_SECRET);
    res.status(200).json({'jwt_token': token, user});
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};


module.exports.register = async (req, res) => {
  try {
    const {email, password} = req.body;
    console.log('email: ', email, 'password: ', password);
      const user = new User({
        email,
        password: await bcrypt.hash(password, 10),
      });
      await user.save();
      res.status(200).json({message: 'Profile created successfully'});
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

// module.exports.fogotPassword = async (req, res) => {
//   try {
//     const {email} = req.body;
//     console.log(email)
//     const password = await bcrypt.hash(`${Date.now()}`, 10);
//     console.log(password)
//     const user = await Credential.findOneAndUpdate({email}, {$set:{password}}, {new: true});
//     if (!user) {
//       return res.status(400).json({
//         message: `No user with email '${email}'
//     found!`});
//     }
//     res.status(200).json({'message': 'New password sent to your email address'});
//   } catch (error) {
//     res.status(400).json({message: error.message});
//   }
// };
