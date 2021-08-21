const arrayStatesBrazil = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const resume = document.getElementById('resume');
const role = document.getElementById('role');
const roleDescription = document.getElementById('role-description');
const date = document.getElementById('date');

function addOptionsState() {
  for (let value of arrayStatesBrazil) {
    let option = document.createElement('option');
    option.innerText = value;
    option.value = value;
    state.appendChild(option);
  }
}

function validateText(string, number) {
  const value = string.value;
  if (value) {
    if (value.length > number) {
      alert(`${string.id} ultrapassa o limite de ${number} caracteres!`)
      return 1;
    }
    return 0;
  }
  alert(`${string.id} é um campo obrigatório.`)
  return 1;
}

function validateTexts() {
  const funcValiText = [validateText(nameInput, 40),validateText(cpf, 11), validateText(address, 200), validateText(city, 28), validateText(resume, 1000), validateText(role, 40), validateText(roleDescription, 500)];
  let numberError = 0;

  for (value of funcValiText) {
    numberError += value;
  }
  return numberError;
}

function checkChar(string) {
  for (let i = 1; i < (string.length - 1); i += 1) {
    if (string[i] === '@') {
      return true;
    }
  }
  return false;
}

function validateEmail() {
  const string = email.value;
  if (string) {
    if (string.length > 50) {
      alert(`${email.id} ultrapassa o limite de 50 caracteres!`)
      return 1;
    }
    if (!checkChar(string)) {
      alert(`${email.id} inválido.`)
      return 1;
    }
  }
  alert(`${email.id} é um campo obrigatório.`)
}

function validateCpf() {
  const string = cpf.value;
  
}

function validateInputs() {
  let countError = 0;
  const validateInput = [validateTexts(), validateEmail(), validateCpf(), validateSelect(), validateRadio(), validateDate()];

  for (value of validateInput) {
    countError += value;
  }
  if (countError === 0) {
    return true;
  }
  return false;
}

function submit(event) {
  event.preventDefault();
  if (validateInputs()) {
    function resultForm() {
      // cria div com dados inseridos
    };
  } else {
    function resultErro() {
      // cria div com erros
    }
  }
}

window.onload = function init() {
  addOptionsState();

  let btnSubmit = document.getElementById('submit-btn');
  btnSubmit.addEventListener('click', submit);
}
