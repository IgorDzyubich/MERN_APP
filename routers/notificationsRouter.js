/* eslint-disable max-len */
const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('./helpers');
const {validateNotifications} = require('./middlewares/validationMiddleware');
const {authMiddleware} = require('./middlewares/authMiddleware');
const {getNotifications, postNotifications} = require('../controllers/notificationsController');

router.get('/', asyncWrapper(authMiddleware),
    asyncWrapper(getNotifications));
router.post('/', asyncWrapper(authMiddleware),
    asyncWrapper(validateNotifications), asyncWrapper(postNotifications));
// router.get('/active', asyncWrapper(authMiddleware),
//     asyncWrapper(getLoadActive));
// router.patch('/active/state', asyncWrapper(authMiddleware),
//     asyncWrapper(getLoadActiveState));
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
