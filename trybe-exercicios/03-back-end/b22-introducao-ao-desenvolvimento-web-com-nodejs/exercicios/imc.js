const { questionFloat } = require('readline-sync');

const getImcClassification = (imc) => {
  if (imc < 18.5) {
    return 'Abaixo do peso (magreza)';
  }
  if (imc >= 18.5 && imc <= 24.9) {
    return 'Peso normal';
  }
  if (imc >= 25 && imc <= 29.9) {
    return 'Acima do peso (sobrepeso)';
  }
  if (imc >= 30 && imc <= 34.9) {
    return 'Obesidade grau I';
  }
  if (imc >= 35 && imc <= 39.9) {
    return 'Obesidade grau II';
  }
  if (imc >= 40) {
    return 'Obesidade graus III e IV';
  }
};

const calculateIMC = () => {
  const weight = questionFloat('Qual o seu peso(em quilos)? ');
  const height = questionFloat('Qual a sua altura(em metros)? ');
  const imc = weight / (height ** 2);
  const classification = getImcClassification(imc); 
  const message = `O IMC é: ${imc.toFixed(1)}\nA classificação é: ${classification}`;
  
  console.log(message);
};

module.exports = calculateIMC;
