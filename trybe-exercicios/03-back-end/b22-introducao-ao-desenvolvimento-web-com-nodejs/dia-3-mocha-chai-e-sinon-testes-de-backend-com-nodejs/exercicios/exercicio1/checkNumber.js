function checkNumber(number) {
  if (typeof number !== 'number') throw new Error('The parameter must be a number!');

  if (number > 0) return 'positivo';
  if (number < 0) return 'negativo';
  return 'neutro';
}

module.exports = checkNumber;
