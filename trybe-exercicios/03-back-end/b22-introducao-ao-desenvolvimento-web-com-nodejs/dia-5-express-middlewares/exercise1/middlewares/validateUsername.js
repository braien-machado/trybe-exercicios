module.exports = (req, _res, next) => {
  const { username } = req.body;
  
  if (username.length <= 3) {
    const newError = new Error();
    newError.status = 400;
    return next(newError);
  }

  next();
}