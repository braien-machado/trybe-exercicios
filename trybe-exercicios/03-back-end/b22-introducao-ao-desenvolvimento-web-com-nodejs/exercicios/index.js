const readline = require('readline-sync');
const sorteio = require('./sorteio');
const velocidade = require('./velocidade');
const imc = require('./imc');
const fatorial = require('./fatorial');
const fibonacci = require('./fibonacci');

const scripts = {
  1: sorteio,
  2: velocidade,
  3: imc,
  4: fatorial,
  5: fibonacci,
};

const arrayOfScriptsNames = [
  'sorteio', 'velocidade', 'imc', 'fatorial', 'fibonacci',
];

const listOptions = () => {
  const list = arrayOfScriptsNames.reduce((acc, curr, index) => `${acc}${index + 1})${curr};\n`, '');
  return list;
};

const main = () => {
  const inputScript = readline.questionInt(`Digite o número correspondente ao script que deve ser executado.\n${listOptions()}\n`);

  if (scripts[inputScript]) {
    const script = scripts[inputScript];
    script();
  }
};

main();
