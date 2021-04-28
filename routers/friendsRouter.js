const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('./helpers');
const {authMiddleware} = require('./middlewares/authMiddleware');

const {addFriends, getFriends, deleteFriends} = require('../controllers/friendsController');

router.post('/', asyncWrapper(authMiddleware), asyncWrapper(addFriends));
router.get('/', asyncWrapper(authMiddleware), asyncWrapper(getFriends));
router.delete('/:id', asyncWrapper(authMiddleware), asyncWrapper(deleteFriends));

module.exports = router;
