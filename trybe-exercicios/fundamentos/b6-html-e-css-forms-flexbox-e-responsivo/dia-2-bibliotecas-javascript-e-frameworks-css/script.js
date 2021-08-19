const arrayStatesBrazil = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

function addOptionsState() {
  const select = document.getElementById('state');
  for (let value of arrayStatesBrazil) {
    let option = document.createElement('option');
    option.innerText = value;
    option.value = value;
    select.appendChild(option);
  }
}

function submit() {}

function clear() {}

window.onload = function init() {
  addOptionsState();

  let btnSubmit = document.getElementById('submit-btn');
  btnSubmit.addEventListener('click', submit);

  let btnClear = document.getElementById('clear-btn');
  btnClear.addEventListener('click', clear);
}
