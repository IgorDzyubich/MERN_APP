/* eslint-disable max-len */
const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('./helpers');
const {validateRegister, validateLogin, validateEmail} = require('./middlewares/validationMiddleware');
const {login, register, fogotPassword} = require('../controllers/authController');

router.post('/register', asyncWrapper(validateRegister), asyncWrapper(register));
router.post('/login', asyncWrapper(validateLogin), asyncWrapper(login));
// router.post('/forgot_password', asyncWrapper(validateEmail), asyncWrapper(fogotPassword));

module.exports = router;
