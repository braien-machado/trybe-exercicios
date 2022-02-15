const express = require('express');
const rescue = require('express-rescue');
const validateUsername = require('../middlewares/validateUsername');
const errorRegisterHandler = require('../middlewares/errorRegisterHandler');
const validatePassword = require('../middlewares/validatePassword');
const validateEmail = require('../middlewares/validateEmail');
const registerUser = require('../middlewares/registerUser');

const router = express.Router();

router.post('/register', validateUsername, validatePassword, validateEmail, errorRegisterHandler, rescue(registerUser));

router.post('/login', validateEmail, validatePassword, function (req, res) {
  res.status(200).json({ token: 'vdsvvsdvsd' });
});

module.exports = router;