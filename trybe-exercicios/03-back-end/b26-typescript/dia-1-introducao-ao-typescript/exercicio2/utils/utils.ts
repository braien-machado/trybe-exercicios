import * as readLine from 'readline-sync';

function makeError (unity: string): void {
  throw new Error(`A unidade "${unity}" não é uma unidade válida`);
}

function convert (units: string[], value: number, unitBase: string, unitConvert: string): number {

  const unitToBeConverted: number = units.indexOf(unitBase);
  const unitToConvertTo: number = units.indexOf(unitConvert);

  if (!units.includes(unitBase)) makeError(unitBase);
  if (!units.includes(unitConvert)) makeError(unitConvert);

  const exponent: number = unitToConvertTo - unitToBeConverted;

  return (value * Math.pow(10, exponent));  
}

export default function exec(units: string[]) {
  const valueToBeConverted: number = parseFloat(readLine.question('Qual o valor para conversão? '));
  const unitToBeConverted: string = readLine.question('Qual a unidade a ser convertida? Utilize a abreviação. ');
  const unitToGet: string = readLine.question('Para qual unidade será convertida? Utilize a abreviação. ');

  const convertedValue: number = convert(units, valueToBeConverted, unitToBeConverted, unitToGet);
  console.log(valueToBeConverted)
  console.log(`${valueToBeConverted}${unitToBeConverted} é igual a ${convertedValue}${unitToGet}`);
}