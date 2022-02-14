module.exports = (req, _res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.com$/;
  
  if (!regex.test(email)) {
    const newError = new Error('invalid data');
    newError.status = 400;
    return next(newError);
  }

  next();
}