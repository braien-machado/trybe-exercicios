// 3. Reescreva o código do exercício anterior para que utilize async/await.
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async.

const doMath = require('./exercicio1');

const generateNumber = () => Math.floor(Math.random() * 100 + 1);

const number1 = generateNumber();
const number2 = generateNumber();
const number3 = generateNumber();

async function main() {
  try {
    const result = await doMath(number1, number2, number3);
    console.log(number1, number2, number3);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

main();