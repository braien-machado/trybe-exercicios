import * as readLine from 'readline-sync';

function makeError (unity: string): void {
  throw new Error(`A unidade "${unity}" não é uma unidade válida`);
}

function convert (units: string[], valor: number, unitBase: string, unitConvert: string): number {

  const unitToBeConverted: number = units.indexOf(unitBase);
  const unitToConvertTo: number = units.indexOf(unitConvert);

  if (!units.includes(unitBase)) makeError(unitBase);
  if (!units.includes(unitConvert)) makeError(unitConvert);

  return (valor * 10 ** (unitToConvertTo - unitToBeConverted));  
}

export default function exec(units: string[]) {
  const valueToBeConverted: number = parseInt(readLine.question('Qual o valor para conversão? '), 10);
  const unitToBeConverted: string = readLine.question('Qual a unidade a ser convertida? Utilize a abreviação. ');
  const unitToGet: string = readLine.question('Para qual unidade será convertida? Utilize a abreviação. ');

  const convertedValue: number = convert(units, valueToBeConverted, unitToBeConverted, unitToGet);

  console.log(`${valueToBeConverted}${unitToBeConverted} é igual a ${convertedValue}${unitToGet}`);
}