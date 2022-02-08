const readline = require('readline-sync');

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 11);
  return randomNumber;
}

const getInputNumber = () => {
  const inputNumber = readline.questionInt('De 0 a 10, qual número será gerado? ');
  return inputNumber;
}

const checkRandomNumber = () => {
  const randomNumber = generateRandomNumber();
  const inputNumber = getInputNumber();

  if (randomNumber === inputNumber) {
    console.log(`Parabéns, ${randomNumber} é o número correto!`);
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
  }

  const tryAgain = readline.question('Deseja jogar novamente? (s/qualquer tecla) ')
  if (tryAgain === 's') {
    checkRandomNumber();
  }
}

checkRandomNumber();
