const fs = require('fs').promises;

module.exports = async function (req, res) {
  const { username, password, email } = req.body;
  const usersFile = JSON.parse(await fs.readFile('./users.json', 'utf8'));

  newUser = { username, password, email };

  usersFile.push(newUser);
  await fs.writeFile('./users.json', JSON.stringify(usersFile));

  res.status(201).json({ message: 'user created' });
}