const Cep = require('../services/cepService');

const validateCep = (req, res, next) => {
  const { cep } = req.params;

  if (!Cep.isCepValid(cep)) {
    return res.status(400).json({
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      },
    });
  }

  return next();
};

module.exports = validateCep;
