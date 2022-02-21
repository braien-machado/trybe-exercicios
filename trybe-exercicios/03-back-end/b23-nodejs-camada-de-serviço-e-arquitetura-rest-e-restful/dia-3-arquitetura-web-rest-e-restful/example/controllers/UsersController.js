const userModel = require('../models/Users');

const listAll = (req, res) => {
  try {
    const data = userModel.getAll();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu ruim...' });
  }
};

module.exports = {
  listAll,
};
