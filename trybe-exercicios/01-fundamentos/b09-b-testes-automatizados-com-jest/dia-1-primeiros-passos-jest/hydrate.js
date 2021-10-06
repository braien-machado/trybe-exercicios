function hydrate(string) {
  const sum = string.match(/\d+/g).reduce((acc, number) => acc + parseInt(number, 10), 0);
  return (sum > 1) ? `${sum} copos de água` : '1 copo de água';
}

module.exports = hydrate;
