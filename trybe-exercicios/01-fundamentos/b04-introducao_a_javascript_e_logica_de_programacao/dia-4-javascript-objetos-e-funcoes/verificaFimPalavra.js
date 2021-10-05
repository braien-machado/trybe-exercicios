function verificaFimPalavra(stringWord, stringEnding) {
  let ending = stringEnding.split('').reverse().join('');
  let word = stringWord.split('').reverse().join('');
  let sameEnding = false;
  for (let index in ending) {
    if (ending[index] === word[index]) {
      sameEnding = true;
    } else {
      sameEnding = false;
      break
    }
  }
  return sameEnding;
}
console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));