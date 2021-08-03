function conversorRomanos(string) {
  let tabela = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  }
  let stringLower = string.toLowerCase();
  let numero = [];
  for (let index in stringLower) {
    numero.push(tabela[stringLower[index]]);
  }
  let soma = 0;
  for (let atual = 0; atual < numero.length; atual += 1) {
    if (numero[atual] >= numero[atual + 1] ||  numero[atual + 1] === undefined) {
      soma += numero[atual];
    } else {
      soma -= numero[atual];
    }
  }
  return soma;
}

console.log(conversorRomanos('cmxcix'));