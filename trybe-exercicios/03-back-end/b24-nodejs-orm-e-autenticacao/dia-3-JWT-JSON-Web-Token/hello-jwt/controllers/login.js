const jwt = require('jsonwebtoken');
const { env: {SECRET, ADMIN_PASSWORD, ADMIN_USERNAME } } = process;

module.exports = (req, res, next) => {
  const { username, password } = req.body;
  
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const admin = (username === ADMIN_USERNAME && password === ADMIN_PASSWORD);
  const token = jwt.sign({ data: username, admin }, SECRET, jwtConfig);

  res.status(200).json({ token });
};
