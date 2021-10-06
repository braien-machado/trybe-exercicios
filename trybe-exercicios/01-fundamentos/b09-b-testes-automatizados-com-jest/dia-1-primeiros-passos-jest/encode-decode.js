function compareToEncode(char) {
  const list = ['a', 'e', 'i', 'o', 'u'];
  const letter = list.find((elem) => elem === char);
  return (letter) ? list.indexOf(letter[0]) + 1 : char;
}

function compareToDecode(char) {
  const list = ['a', 'e', 'i', 'o', 'u'];
  const letter = list.reduce((acc, elem, index) => (`${index + 1}` === char) ? elem : acc, undefined);
  return (letter) ? letter[0] : char;
}

function encode(string) {
  const array = string.split('');
  const newArray = array.map((elem) => compareToEncode(elem));
  return newArray.join('');
}

function decode(string) {
  const array = string.split('');
  const newArray = array.map((elem) => compareToDecode(elem));
  return newArray.join('');
}

module.exports = { encode, decode };
