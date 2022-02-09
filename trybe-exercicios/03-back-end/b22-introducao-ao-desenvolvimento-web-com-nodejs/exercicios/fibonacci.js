const readline = require('readline-sync');

const getFibonacciSeries = () => {
  const number = readline.questionInt('Digite o número de elementos da sequência de Fibonacci que deve aparecer: ');

  if (number <= 0) {
    console.log('O número deve ser um inteiro maior que 0.');
    return getFibonacciSeries();
  }

  const fibonacciSeries = [];
  for (let i = 0; i < number; i+= 1) {
    if (fibonacciSeries.length <= 1) {
      fibonacciSeries.push(1);
    } else {
      fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
    }
  }

  console.log(...fibonacciSeries);
};

module.exports = getFibonacciSeries;