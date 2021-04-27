/* eslint-disable max-len */
const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('./helpers');
const {validateLoad} = require('./middlewares/validationMiddleware');
const {authMiddleware} = require('./middlewares/authMiddleware');
const {getLoads, postLoad, getLoadActive, getLoadActiveState, getLoadById,
  putLoadById, deleteLoadById, postLoadById, getShippingInfoById} = require('../controllers/loadController');

router.get('/', asyncWrapper(authMiddleware),
    asyncWrapper(getLoads));
router.post('/', asyncWrapper(authMiddleware),
    asyncWrapper(validateLoad), asyncWrapper(postLoad));
router.get('/active', asyncWrapper(authMiddleware),
    asyncWrapper(getLoadActive));
router.patch('/active/state', asyncWrapper(authMiddleware),
    asyncWrapper(getLoadActiveState));
router.get('/:id', asyncWrapper(authMiddleware),
    asyncWrapper(getLoadById));
router.put('/:id', asyncWrapper(authMiddleware),
    asyncWrapper(validateLoad), asyncWrapper(putLoadById));
router.delete('/:id', asyncWrapper(authMiddleware),
    asyncWrapper(deleteLoadById));
router.post('/:id/post', asyncWrapper(authMiddleware),
    asyncWrapper(postLoadById));
router.get('/:id/shipping_info', asyncWrapper(authMiddleware),
    asyncWrapper(getShippingInfoById));

module.exports = router;
