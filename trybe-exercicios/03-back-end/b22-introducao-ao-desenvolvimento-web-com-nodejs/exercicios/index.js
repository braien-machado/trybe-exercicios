const readline = require('readline-sync');
const sorteioScript = require('./sorteio');
const velocidadeScript = require('./velocidade');
const imcScript = require('./imc');

const scripts = {
  1: sorteioScript,
  2: velocidadeScript,
  3: imcScript
}

const main = () => {
  const inputScript = readline.questionInt('Digite o número correspondente ao script que deve ser executado.\n1) sorteio\n2) velocidade\n3) imc\n');

  if (scripts[inputScript]) {
    const script = scripts[inputScript];
    script();
  }
}

main();
