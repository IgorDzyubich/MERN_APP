const {Peoples} = require('../models/peoplesModel');

module.exports.addPeoples = async (req, res) => {
  const {first_name, email } = req.body
  const peoples = new Peoples({
    first_name, email
  });
  await peoples.save();
  res.status(200).json({message: 'Peoples created successfully'});
};

module.exports.getPeoples = async (req, res) => {
  const peoples = await Peoples.find({});
  if (!peoples) {
    return res.status(400).json({message: `No peoples found!`});
  }
  res.status(200).json({'peoples': peoples});
};
