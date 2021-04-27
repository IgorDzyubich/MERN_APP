const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('./helpers');
const {authMiddleware} = require('./middlewares/authMiddleware');

const {getUser, getUsers, deleteUser,
  updateUser} = require('../controllers/userController');

router.get('/', asyncWrapper(authMiddleware), asyncWrapper(getUser));
// router.get('/users', asyncWrapper(authMiddleware), asyncWrapper(getUsers));
router.get('/users', asyncWrapper(authMiddleware), asyncWrapper(getUsers));
router.delete('/', asyncWrapper(authMiddleware), asyncWrapper(deleteUser));
// eslint-disable-next-line max-len
router.patch('/password', asyncWrapper(authMiddleware), asyncWrapper(updateUser));

module.exports = router;
