module.exports = (err, _req, _res, next) => {
  err.message = 'invalid data';

  next(err);
}