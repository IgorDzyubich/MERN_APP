const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('./helpers');
const {validateTruck} = require('./middlewares/validationMiddleware');
const {authMiddleware} = require('./middlewares/authMiddleware');
const {getTrucks, postTruck, getTruckById, putTruckById,
    deleteTruckById, postTruckAssignById} = require('../controllers/truckController');

router.get('/', asyncWrapper(authMiddleware),
    asyncWrapper(getTrucks));
router.post('/', asyncWrapper(authMiddleware),
    asyncWrapper(validateTruck), asyncWrapper(postTruck));
router.get('/:id', asyncWrapper(authMiddleware),
    asyncWrapper(getTruckById));
router.put('/:id', asyncWrapper(authMiddleware),
    asyncWrapper(validateTruck), asyncWrapper(putTruckById));
router.delete('/:id', asyncWrapper(authMiddleware),
    asyncWrapper(deleteTruckById));
router.post('/:id/assign', asyncWrapper(authMiddleware),
    asyncWrapper(postTruckAssignById));

module.exports = router;
