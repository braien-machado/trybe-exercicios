module.exports = (req, _res, next) => {
  const { password } = req.body;
  const isPasswordNotNumber = typeof password !== 'number';
  const passwordString = password.toString();
  
  if (passwordString.length <= 3 || passwordString.length > 8 || isPasswordNotNumber) {
    const newError = new Error('invalid data');
    newError.status = 400;
    return next(newError);
  }

  next();
}