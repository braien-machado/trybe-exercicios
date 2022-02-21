const productModel = require('../models/Products');

const listAll = (req, res) => {
  try {
    const data = productModel.getAll();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu ruim...' });
  }
};

module.exports = {
  listAll,
};
