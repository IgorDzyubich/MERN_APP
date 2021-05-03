const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('./helpers');
const {validateMessages} = require('./middlewares/validationMiddleware');
const {authMiddleware} = require('./middlewares/authMiddleware');
const {getMessages, postMessages, changeMessages} = require('../controllers/messagesController');

router.get('/', 
    asyncWrapper(authMiddleware),
    asyncWrapper(getMessages));

router.post('/', 
    asyncWrapper(authMiddleware),
    asyncWrapper(validateMessages),     
    asyncWrapper(postMessages));

router.put('/:id', 
    asyncWrapper(authMiddleware),
    asyncWrapper(changeMessages));

module.exports = router;
