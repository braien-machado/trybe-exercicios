const { questionInt } = require('readline-sync');

function calculateSpeed() {
  const distance = questionInt('Qual a distância(em metros)? ');
  const time = questionInt('Qual o tempo(em segundos)? ')
  const speed = distance / time;
  const message = `A velocidade é: ${speed}m/s`;
  console.log(message);
};

module.exports = calculateSpeed;
