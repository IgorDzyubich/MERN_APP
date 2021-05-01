const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('./helpers');
const {authMiddleware} = require('./middlewares/authMiddleware');

const {getPeoples, addPeoples} = require('../controllers/peoplesController');

router.get('/', asyncWrapper(authMiddleware), asyncWrapper(getPeoples));
router.post('/', asyncWrapper(authMiddleware), asyncWrapper(addPeoples));

module.exports = router;
