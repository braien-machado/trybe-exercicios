import * as readLine from 'readline-sync';

function chooseScript(): void {
  const scripts: string[] = ['capacity', 'mass', 'lenght'];
  const index: number = readLine.keyInSelect(scripts, 'Qual script você deseja executar? ');

  if (index === -1) {
    return console.log('Adeus!');
  }
  
  require(`./${scripts[index]}`);
}

chooseScript();