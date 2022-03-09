const Joi = require('joi');

const schema = Joi.object({
  username: Joi.string().alphanum().min(5).required(),
  password: Joi.string().min(5).required(),
});

module.exports = (req, res, next) => {
  const { username, password } = req.body;
  const { error } = schema.validate({ username, password })

  if (!error) return next();

  return next(error);
};