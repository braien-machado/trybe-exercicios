/** 1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
- Modifique a estrutura da função para que ela seja uma arrow function .
- Modifique as concatenações para template literals . 

function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true); */

let testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

/** 2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
- Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
- Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números. 

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(oddsAndEvens); // será necessário alterar essa linha 😉 */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const arrayAscendingOrder = (array) => {
  for (let index = 1; index  <= array.length; index += 1) {
    for (let i = 1; i  <= array.length; i += 1) {
      const number = array[i];
      const previousNumber = array[i -1];
      if (number < previousNumber) {
        array[i - 1] = number;
        array[i] = previousNumber;
      }
    }
  }
  return array;
}

console.log(`Os números ${arrayAscendingOrder(oddsAndEvens)} se encontram ordenados de forma crescente!`);

const arraySort = (array) => {
  array.sort((a, b) => {
    return a - b;
  });
  return array;
}

console.log(`Os números ${arraySort(oddsAndEvens)} se encontram ordenados de forma crescente!`);