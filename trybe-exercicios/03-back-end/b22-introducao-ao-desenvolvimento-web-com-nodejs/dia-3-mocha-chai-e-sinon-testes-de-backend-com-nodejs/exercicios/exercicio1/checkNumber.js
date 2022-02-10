function checkNumber(number) {
  if (typeof number !== 'number') throw new Error('The parameter must be a number!');
}



module.exports = checkNumber;