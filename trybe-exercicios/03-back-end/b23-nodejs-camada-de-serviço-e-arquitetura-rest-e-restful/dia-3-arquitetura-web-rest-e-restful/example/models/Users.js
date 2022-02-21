const users = require('../data/users.json');

const getAll = () => {
  return users;
}

module.exports = { getAll };