module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if(authorization.length !== 16 || authorization === 'Bearer undefined') return res.status(401).json({ message: 'Token inválido!' });

  return next();
}