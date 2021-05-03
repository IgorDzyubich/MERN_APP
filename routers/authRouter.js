const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('./helpers');
const {validateRegister, validateLogin} = require('./middlewares/validationMiddleware');
const {login, register} = require('../controllers/authController');

router.post('/register', asyncWrapper(validateRegister), asyncWrapper(register));
router.post('/login', asyncWrapper(validateLogin), asyncWrapper(login));

module.exports = router;
