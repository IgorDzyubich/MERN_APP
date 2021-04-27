const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('./helpers');
const {authMiddleware} = require('./middlewares/authMiddleware');

const {getContract, getContracts,
  changeContract, deleteContract, addContract} = require('../controllers/contractController');

// router.get('/', asyncWrapper(authMiddleware), asyncWrapper(getContract));
router.get('/contract/:id', asyncWrapper(getContract));
router.patch('/contract/:id', asyncWrapper(changeContract));
router.post('/contract', asyncWrapper(addContract));
// router.get('/contracts', asyncWrapper(authMiddleware),
//     asyncWrapper(getContracts));
router.get('/',
    asyncWrapper(getContracts));
router.delete('/', asyncWrapper(authMiddleware), asyncWrapper(deleteContract));
// eslint-disable-next-line max-len
// router.patch('/password', asyncWrapper(authMiddleware), asyncWrapper(updateUser));

module.exports = router;
