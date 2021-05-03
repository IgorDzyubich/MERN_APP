const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('./helpers');
const {validateNotifications} = require('./middlewares/validationMiddleware');
const {authMiddleware} = require('./middlewares/authMiddleware');
const {getNotifications, postNotifications, changeNotifications} = require('../controllers/notificationsController');

router.get('/', 
    asyncWrapper(authMiddleware),
    asyncWrapper(getNotifications));

router.post('/', 
    asyncWrapper(authMiddleware),
    asyncWrapper(validateNotifications), 
    asyncWrapper(postNotifications));
    
router.put('/:id', 
    asyncWrapper(authMiddleware),
    asyncWrapper(changeNotifications));

module.exports = router;
