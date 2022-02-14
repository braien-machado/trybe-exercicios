const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs').promises;
const validateUsername = require('../middlewares/validateUsername');
const validatePassword = require('../middlewares/validatePassword');
const validateEmail = require('../middlewares/validateEmail');
const router = express.Router();

router.post('/register', validateUsername, validatePassword, validateEmail, rescue(async function (req, res) {
  const { username, password, email } = req.body;
  const usersFile = JSON.parse(await fs.readFile('./users.json', 'utf8'));
  console.log(usersFile);
  newUser = { username, password, email };

  usersFile.push(newUser);
  await fs.writeFile('./users.json', JSON.stringify(usersFile));

  res.status(201).json({ message: 'user created' });
}));

module.exports = router;