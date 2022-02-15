const express = require('express');
const rescue = require('express-rescue');
const validateUsername = require('../middlewares/validateUsername');
const errorRegisterValidation = require('../middlewares/errorRegisterValidation');
const errorLoginValidation = require('../middlewares/errorLoginValidation');
const validatePassword = require('../middlewares/validatePassword');
const validateEmail = require('../middlewares/validateEmail');
const registerUser = require('../middlewares/registerUser');
const generateToken = require('../middlewares/generateToken');

const router = express.Router();

router.post('/register', validateUsername, validatePassword, validateEmail, errorRegisterValidation, rescue(registerUser));

router.post('/login', validateEmail, validatePassword, errorLoginValidation, generateToken);

module.exports = router;