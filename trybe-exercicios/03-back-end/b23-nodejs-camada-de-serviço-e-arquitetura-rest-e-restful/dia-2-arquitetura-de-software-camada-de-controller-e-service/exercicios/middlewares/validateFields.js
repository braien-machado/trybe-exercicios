const Joi = require('joi');

const schema = Joi.object({
  cep: Joi.string().not().empty().required()
    .regex(/\d{5}-\d{3}/),
  logradouro: Joi.string().not().empty().required(),
  bairro: Joi.string().not().empty().required(),
  localidade: Joi.string().not().empty().required(),
  uf: Joi.string().not().empty().required(),
});

const validateFields = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ code: 'invalidData', message: error.message });
  }

  return next();
};

module.exports = validateFields;
