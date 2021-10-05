let arrayTeste = [2, 4, 6, 7, 10, 0, -3];

function indiceMenorValor(array) {
  let menorValor = array[0];
  let indexMenor = 0;
  for (let valor in array) {
    if (array[valor] <= menorValor) {
      menorValor = array[valor];
      indexMenor = valor;
    }
  }
  return indexMenor;
}

console.log(indiceMenorValor(arrayTeste));