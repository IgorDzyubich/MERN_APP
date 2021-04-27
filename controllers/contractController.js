const {Contract} = require('../models/contractModel');

module.exports.getContract = async (req, res) => {
  console.log('getContract id: ', req.params.id);
  const contractId = req.params.id;
  const contract = await Contract.findOne({_id: contractId});
  if (!contract) {
    return res.status(400).json({message: `No contract with contractId
    '${contractId}' found!`});
  }
  res.status(200).json({'contract': contract});
};

module.exports.getContracts = async (req, res) => {
  const contracts = await Contract.find({});
  if (!contracts) {
    return res.status(400).json({message: `No contracts found!`});
  }
  res.status(200).json({'contracts': contracts});
};

module.exports.deleteContracts = async (req, res) => {
  console.log('payload: ', req.payload);
  const contractId = req.payload._id;
  const contract = await Contract.remove({_id: contractId});
  if (!contract) {
    return res.status(400).json({message: `No contract with ID 
    '${contractId}' found!`});
  }
  res.status(200).json({message: 'Contract deleted successfully'});
};

module.exports.changeContract = async (req, res) => {
  const contractId = req.params.id;
  console.log('CHANGE req.body: ', req.body)
  const contract = await Contract.findOneAndUpdate({_id: contractId}, req.body, {new: true})
  console.log('CHANGE: ', contract)
  if (!contract) {
    return res.status(400).json({message: `No contract with contractId
    '${contractId}' found!`});
  }
  res.status(200).json({'contract': contract});
};

module.exports.addContract = async (req, res) => {
  // const contractId = req.params.id;
  console.log('ADD req.body: ', req.body)
  const contract = new Contract({...req.body})
  await contract.save()
  console.log('ADD: ', contract)
  if (!contract) {
    return res.status(400).json({message: `New contract wasn\`t created!`});
  }
  res.status(200).json({'contract': contract});
};
// module.exports.updateUser = async (req, res) => {
//   const userEmail = req.payload.userEmail;
//   const user = await Credential.findOneAndUpdate({
//     'email': userEmail},
//   {$set: {'password': await bcrypt.hash(req.body.newPassword, 10)}},
//   {new: true});
//   if (!user) {
//     return res.status(400).json({message: `No user with email
//     '${userEmail}' found!`});
//   }
//   res.status(200).json({message: 'Password changed successfully'});
// };
