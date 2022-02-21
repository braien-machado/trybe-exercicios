const products = require('../data/products.json');

const getAll = () => {
  return products;
}

module.exports = { getAll };