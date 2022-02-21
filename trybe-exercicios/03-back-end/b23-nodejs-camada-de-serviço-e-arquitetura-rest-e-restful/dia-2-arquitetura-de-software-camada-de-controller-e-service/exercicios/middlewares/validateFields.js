const Joi = require('joi');

const validateFields = (req, res, next) => {
  const {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  } = req.body;
};

module.exports = validateFields;
