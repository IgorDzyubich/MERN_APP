/* eslint-disable max-len */
const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('./helpers');
const {validateMessages} = require('./middlewares/validationMiddleware');
const {authMiddleware} = require('./middlewares/authMiddleware');
const {getMessages, postMessages, changeMessages} = require('../controllers/messagesController');

router.get('/', asyncWrapper(authMiddleware),
    asyncWrapper(getMessages));
router.post('/', asyncWrapper(authMiddleware),
    asyncWrapper(validateMessages), asyncWrapper(postMessages));
router.put('/:id', asyncWrapper(authMiddleware),
    asyncWrapper(changeMessages));
// router.get('/:id', asyncWrapper(authMiddleware),
//     asyncWrapper(getLoadById));
// router.put('/:id', asyncWrapper(authMiddleware),
//     asyncWrapper(validateLoad), asyncWrapper(putLoadById));
// router.delete('/:id', asyncWrapper(authMiddleware),
//     asyncWrapper(deleteLoadById));
// router.post('/:id/post', asyncWrapper(authMiddleware),
//     asyncWrapper(postLoadById));
// router.get('/:id/shipping_info', asyncWrapper(authMiddleware),
//     asyncWrapper(getShippingInfoById));

module.exports = router;
