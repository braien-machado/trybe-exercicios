module.exports = (err, _req, _res, next) => {
  err.message = 'email or password is incorrect';

  next(err);
}