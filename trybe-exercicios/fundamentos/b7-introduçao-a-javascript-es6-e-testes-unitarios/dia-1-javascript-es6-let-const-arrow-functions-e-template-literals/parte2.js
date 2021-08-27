/** 1. Crie uma função que receba um número e retorne seu fatorial.
- Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
- Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator. */

const getFactorial = (n) => {
  let factorial = n;
  for (let i = 1; i < n; i += 1) {
    factorial *= i; 
  }
  return factorial;
}
const number = 6;

console.log(`${number}! é ${getFactorial(number)}`);

const oneLineFactorial = (n) => {
  return (n > 1) ? (n * oneLineFactorial(n -1)) : 1;
}

console.log(`${number}! é ${oneLineFactorial(number)}`);

/** 2. Crie uma função que receba uma frase e retorne qual a maior palavra. */

const longestWord = (string) => {
  const array = string.split(' ');
  let longest = '';
  for (let i of array) {
    (i.length > longest.length) ? (longest = i) : null;
  }
  return longest;
}

console.log(longestWord(`I hate to see you go, now that you're gone We can enjoy the show When you find them laughing at you There's no worst thing`));

/** 3. Crie uma página que contenha:
- Um botão ao qual será associado um event listener ;
- Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
- Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada. */