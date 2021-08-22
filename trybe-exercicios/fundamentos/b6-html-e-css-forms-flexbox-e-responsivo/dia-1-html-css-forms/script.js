const arrayStatesBrazil = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

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
let selectedRadioOption = document.querySelector('.selectedHome');

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
  const funcValiText = [validateText(nameInput, 40), validateText(address, 200), validateText(city, 28), validateText(resume, 1000), validateText(role, 40), validateText(roleDescription, 500)];
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
    return 0;
  }
  alert(`${email.id} é um campo obrigatório.`)
  return 1;
}

function checkCpfNumbers(string) {
  const arrayOfNumbers = string.match(/\d/g);
  if (arrayOfNumbers.length !== 11) {
    return false;
  }
  return true;
}

function validateCpf() {
  const string = cpf.value;
  if (string) {
    if (string.length !== 11) {
      alert(`${cpf.id} precisa ter 11 caracteres.`);
      return 1;
    }
    if (!checkCpfNumbers(string)) {
      alert(`${cpf.id} precisa ter apenas caracteres numéricos.`);
      return 1;
    }
    return 0;
  }
  alert(`${cpf.id} é um campo obrigatório.`)
  return 1;
}

function validateState() {
  const optionState = state.value;
  if (!optionState) {
    alert(`${state.id} é um campo obrigatório.`);
    return 1;
  }
  return 0;
}

function validateHome() {
  selectedRadioOption = document.querySelector('.selectedHome')
  if (!selectedRadioOption) {
    alert(`"Tipo" é um campo obrigatório.`);
    return 1;
  }
  return 0;
}

function checkValuesDate(arrayDate) {
  if (arrayDate[0] < 1 || arrayDate[0] >= 31) {
    alert('Dia inválido. Valor deve ser maior que 0 e menor que 32.')
    return 1;
  }
  if (arrayDate[1] < 1 || arrayDate[1] >= 12) {
    alert('Mês inválido. Valor deve ser maior que 0 e menor que 13.')
    return 1;
  }
  if (arrayDate[2] < 0) {
    alert('Ano inválido. Valor deve ser maior que 0.')
    return 1;
  }
  return 0;
}

function checkDate(dateString) {
  const stringSplit = dateString.split('/');
  const arrayDate = dateString.match(/\d+/g);
  const invalidFormatMsg = 'Formato de data inválido. Favor, seguir padrão dd/mm/yyyy.'
  if ((stringSplit.length !== 3) || (dateString.length !== 10)) {
    alert(invalidFormatMsg);
    return 1;
  }
  for (let i = 0; i < 3; i += 1) {
    if ((i !== 2) && (arrayDate[i].length !== 2)) {
      alert(invalidFormatMsg);
      return 1;
    }
    if ((i === 2) && (arrayDate[i].length !== 4)) {
      alert(invalidFormatMsg);
      return 1;
    }
    arrayDate[i] = parseInt(arrayDate[i], 10);
  }
  return checkValuesDate(arrayDate);
}

function validateDate() {
  const dateString = date.value;
  if (dateString) {
    return checkDate(dateString);
  }
  alert(`${date.id} é um campo obrigatório.`);
  return 1;
}

function validateInputs() {
  let countError = 0;
  const validateInput = [validateTexts(), validateEmail(), validateCpf(), validateState(), validateHome(), validateDate()];

  for (value of validateInput) {
    countError += value;
  }
  if (countError === 0) {
    return true;
  }
  return false;
}

function resultForm() {
  const formResult = document.getElementById('result-form');
  const arrayResult = [nameInput, email, cpf, address, city, state, selectedRadioOption, resume, role, roleDescription, date];
  for (let i of arrayResult) {
    if (i !== selectedRadioOption) {
      const divResult = document.createElement('div');
      divResult.innerHTML = `${i.previousElementSibling.innerText} ${i.value}`;
      formResult.appendChild(divResult);
    } else {
      const divResult = document.createElement('div');
      divResult.innerHTML = `Tipo: ${i.parentNode.innerText}`;
      formResult.appendChild(divResult);
    }
  }
}

function submit(event) {
  event.preventDefault();
  if (validateInputs()) {
    resultForm();
  } else {
    function resultErro() {
      // cria div com erros
    }
  }
}

function setSelectedRadio(event) {
  const newSelectedRadio = event.target;
  let selectedRadio = document.querySelector('.selectedHome');

  if (selectedRadio) {
    selectedRadio.classList.remove('selectedHome');
    newSelectedRadio.classList.add('selectedHome');
  } else {
    newSelectedRadio.classList.add('selectedHome');
  }
}

window.onload = function init() {
  addOptionsState();
  let radioOptions = document.getElementsByClassName('type-home');
  for (let i of radioOptions) {
    i.addEventListener('click', setSelectedRadio);
  }

  let btnSubmit = document.getElementById('submit-btn');
  btnSubmit.addEventListener('click', submit);
}
