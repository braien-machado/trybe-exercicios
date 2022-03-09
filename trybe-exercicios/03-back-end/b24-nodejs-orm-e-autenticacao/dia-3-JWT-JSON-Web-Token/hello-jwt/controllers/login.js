const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { string } = require('joi');
const secret = process.env.SECRET;

const schema = Joi.object({
  username: Joi.string().alphanum().min(5).required(),
  password: Joi.string().min(5).required(),
});

module.exports = (req, res, next) => {
  const { username, password } = req.body;
  const { error } = schema.validate({ username, password })
  
  if (error) return next(error);

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: username, admin: false }, secret, jwtConfig);

  res.status(200).json({ token });
};
