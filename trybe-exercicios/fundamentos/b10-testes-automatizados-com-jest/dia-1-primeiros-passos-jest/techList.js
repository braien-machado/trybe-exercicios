function techList(array, string) {
  if (array.length >= 1) {
    return array.sort().map((elem) => ({
      tech: elem,
      name: string
    }));
  }
  return 'Vazio!';
}

module.exports = techList;