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
