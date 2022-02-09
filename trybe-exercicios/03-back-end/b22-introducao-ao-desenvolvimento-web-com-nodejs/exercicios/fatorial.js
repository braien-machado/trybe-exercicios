// Crie um script que realize o fatorial de um número n .
// O fatorial é a multiplicação de um número por todos os seus antecessores até chegar ao número 1.
// Armazene o script no arquivo fatorial.js .
// Utilize o readline-sync para realizar o input de dados.
// O script deve ser acionado através do comando npm run fatorial
// Adicione o script ao menu criado no exercício 8.
// Adicione validações para garantir que o valor informado seja um inteiro maior que 0.

const readline = require('readline-sync');

const factorial = () => {
  const number = readline.questionInt('Digite um número inteiro para calcular o seu fatorial: ');

  if (number <= 0) {
    console.log('O valor informado deve ser um inteiro maior que 0.');
    return factorial();
  }

  let factorialValue = 1;
  for (let i = number; i >= 1; i -= 1) {
    factorialValue *= i;
  }
  console.log(factorialValue);
}

module.exports = factorial;
