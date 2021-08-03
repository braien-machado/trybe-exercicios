function maisRepetido(numeros) {
  let num = {};
  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }
  let numeroMaisRepetido = 0;
  let numeroRepeticao = 0;
  for (let key in num) {
    if (numeroRepeticao < num[key]) {
      numeroMaisRepetido = key;
      numeroRepeticao = num[key];
    }
  }
  return numeroMaisRepetido;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));