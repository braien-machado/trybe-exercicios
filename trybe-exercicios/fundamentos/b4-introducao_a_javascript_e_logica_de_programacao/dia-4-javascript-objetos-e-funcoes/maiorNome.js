let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

function maiorNome(array) {
  let maior= array[0];
  for (let nome in array) {
    if (array[nome].length >= maior.length) {
      maior = array[nome];
    }
  }
  return maior;
}

console.log(maiorNome(arrayTeste));