let arrayTeste = [2, 3, 6, 7, 10, 1];

function inteiroMaiorRepeticao(array) {
  let maiorValor = array[0];
  let indexMaior = 0;
  for (let valor in array) {
    if (array[valor] >= maiorValor) {
      maiorValor = array[valor];
      indexMaior = valor;
    }
  }
  return indexMaior;
}

console.log(inteiroMaiorRepeticao(arrayTeste));