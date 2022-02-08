const { questionFloat } = require('readline-sync');

const calculateIMC = () => {
  const weight = questionFloat('Qual o seu peso(em quilos)? ');
  const height = questionFloat('Qual a sua altura(em metros)? ');
  const imc = weight / (height ** 2);
  const message = `O IMC é ${imc.toFixed(2)}`;
  
  console.log(message);
};

calculateIMC();
