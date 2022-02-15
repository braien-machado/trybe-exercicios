module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const isAuthorizationNotDefined = authorization === 'Bearer undefined';

  const regex = /^[a-zA-Z0-9]+$/
  if (isAuthorizationNotDefined || !regex.test(authorization) || authorization.length !== 12) {
    return res.status(401).json({ message: 'invalid token' });
  }

  next();
}