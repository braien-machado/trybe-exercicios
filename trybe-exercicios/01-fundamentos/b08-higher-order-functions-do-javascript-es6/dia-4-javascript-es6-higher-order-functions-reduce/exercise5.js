// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((counter, name) => {
    const nameLowerCase = name.toLowerCase();
    const letters = nameLowerCase.split('');
    const countName = letters.reduce((count, letter) => (letter === 'a')? count + 1 : count, 0)
    return counter + countName;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);