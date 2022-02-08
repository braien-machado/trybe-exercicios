// 1. Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
// A fórmula para calcular o IMC é peso / altura ^ 2 . Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
// Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .
// Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura .
// Armazene o script no arquivo imc.js .

// const calculateIMC = (weight, height) => {
//   const imc = weight / (height ** 2);
//   const message = `O IMC é ${imc.toFixed(2)}`;
  
//   console.log(message);
// };

// calculateIMC(67, 1.72);

// 2. Agora, permita que o script seja executado através do comando npm run imc
// O novo script criado deve conter o comando que chama o node para executar o arquivo imc.js .

// "imc": "node imc"  <---- dentro do objeto na chave "scripts" em package.json

// 3. Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.
// Você já utilizou o pacote readline-sync para esse fim. Que tal utilizar o mesmo pacote?
// Substitua os valores fixos de peso e altura por dados informados pela pessoa ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.
// 4. Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
// O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre o método adequado para realizar input de floats .
// Encontrou a função? Show! Agora utilize-a para solicitar o input de peso .

// npm i readline-sync   <---- comando no terminal para instalar dependencia
// questionFloat   <---- método para realizar input de floats

// const { questionFloat } = require('readline-sync');

// const calculateIMC = () => {
//   const weight = questionFloat('Qual o seu peso(em quilos)? ');
//   const height = questionFloat('Qual a sua altura(em metros)? ');
//   const imc = weight / (height ** 2);
//   const message = `O IMC é ${imc.toFixed(2)}`;
  
//   console.log(message);
// };

// calculateIMC();

// 5. Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
// Considere a seguinte tabela para classificar a situação do IMC:

// | IMC                                       | Situação                  |
// | ----------------------------------------- | ------------------------- |
// | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
// | Entre 18,5 e 24,9                         | Peso normal               |
// | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
// | Entre 30,0 e 34,9                         | Obesidade grau I          |
// | Entre 35,0 e 39,9                         | Obesidade grau II         |
// | 40,0 e acima                              | Obesidade graus III e IV  |

// const { questionFloat } = require('readline-sync');

// const getImcClassification = (imc) => {
//   if (imc < 18.5) {
//     return 'Abaixo do peso (magreza)';
//   }
//   if (imc >= 18.5 && imc <= 24.9) {
//     return 'Peso normal';
//   }
//   if (imc >= 25 && imc <= 29.9) {
//     return 'Acima do peso (sobrepeso)';
//   }
//   if (imc >= 30 && imc <= 34.9) {
//     return 'Obesidade grau I';
//   }
//   if (imc >= 35 && imc <= 39.9) {
//     return 'Obesidade grau II';
//   }
//   if (imc >= 40) {
//     return 'Obesidade graus III e IV';
//   }
// }

// const calculateIMC = () => {
//   const weight = questionFloat('Qual o seu peso(em quilos)? ');
//   const height = questionFloat('Qual a sua altura(em metros)? ');
//   const imc = weight / (height ** 2);
//   const classification = getImcClassification(imc); 
//   const message = `O IMC é: ${imc.toFixed(1)}\nA classificação é: ${classification}`;
  
//   console.log(message);
// };

// calculateIMC();

// 6. Vamos criar mais um script. Dessa vez, para calcular a velocidade média de um carro numa corrida
// A fórmula para calcular velocidade média é distância / tempo .
// Armazene o script no arquivo velocidade.js.
// Agora, permita que o script seja executado através do comando npm run velocidade . Para isso, crie a chave velocidade dentro do objeto scripts no package.json .
// Utilize o readline-sync para solicitar os dados à pessoa.
// Considere a distância em metros e o tempo em segundos. Repare que, agora, estamos trabalhando com números inteiros.

// "velocidade": "node velocidade"  <---- dentro do objeto na chave "scripts" em package.json

// const { questionInt } = require('readline-sync');

// function calculateSpeed() {
//   const distance = questionInt('Qual a distância(em metros)? ');
//   const time = questionInt('Qual o tempo(em segundos)? ')
//   const speed = distance / time;
//   const message = `A velocidade é: ${speed}m/s`;
//   console.log(message);
// }

// calculateSpeed();

// 7. Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado
// O script deve ser executado através do comando npm run sorteio .
// Utilize o readline-sync para realizar input de dados.
// Armazene o script em sorteio.js .
// O número gerado deve ser um inteiro entre 0 e 10.
// Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".
// Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez. O número era [número sorteado]".
// Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo do script.

// "sorteio": "node sorteio"  <---- dentro do objeto na chave "scripts" em package.json

// const readline = require('readline-sync');

// const generateRandomNumber = () => {
//   const randomNumber = Math.floor(Math.random() * 11);
//   return randomNumber;
// }

// const getInputNumber = () => {
//   const inputNumber = readline.questionInt('De 0 a 10, qual número será gerado? ');
//   return inputNumber;
// }

// const checkRandomNumber = () => {
//   const randomNumber = generateRandomNumber();
//   const inputNumber = getInputNumber();

//   if (randomNumber === inputNumber) {
//     console.log(`Parabéns, ${randomNumber} é o número correto!`);
//   } else {
//     console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
//   }

//   const tryAgain = readline.question('Deseja jogar novamente? (s/qualquer tecla) ')
//   if (tryAgain === 's') {
//     checkRandomNumber();
//   }
// }

// checkRandomNumber();
