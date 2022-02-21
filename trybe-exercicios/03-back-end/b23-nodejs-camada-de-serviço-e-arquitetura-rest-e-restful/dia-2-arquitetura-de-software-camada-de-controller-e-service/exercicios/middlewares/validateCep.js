const Cep = require('../services/cepService');

const validateCep = (req, res, next) => {
  const { cep } = req.params;

  const { error } = Cep.isCepValid(cep);

  if (error) {
    return res.status(400).json(error);
  }

  return next();
};

module.exports = validateCep;
