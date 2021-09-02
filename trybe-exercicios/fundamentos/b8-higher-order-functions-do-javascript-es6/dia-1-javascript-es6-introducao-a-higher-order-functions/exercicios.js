// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

const getEmail = (string) => {
  const strChanged = string.toLowerCase().replace(/\s/g, '_');
  const email = `${strChanged}@trybe.com`;
  return email;
}

const personalInfo = (nomeCompleto) => ({
  nome: nomeCompleto,
  email: getEmail(nomeCompleto),
});
console.log(newEmployees(personalInfo));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const compareNumbers = (num1, num2) => (num1 === num2)? 'Parabéns você ganhou' : 'Tente novamente';

const prizeDraw = (number, callback) => {
  const randomNumber = Math.ceil(Math.random() * 5)
  const result = callback(number, randomNumber);
  return result;
}

console.log(prizeDraw(2, compareNumbers))