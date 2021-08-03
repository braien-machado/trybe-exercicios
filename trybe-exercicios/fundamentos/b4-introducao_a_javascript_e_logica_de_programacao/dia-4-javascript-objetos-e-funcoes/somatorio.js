function somatorio(numero) {
  let soma = 0;
  for (let index = 1; index <= numero; index += 1) {
    soma += index;
  }
  return soma;
}
console.log(somatorio(5));