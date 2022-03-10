const jwt = require('jsonwebtoken');
const { env: { SECRET } } = process;

module.exports = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded.data;
    
    next();
  } catch (error) {
    next(error);
  }
};