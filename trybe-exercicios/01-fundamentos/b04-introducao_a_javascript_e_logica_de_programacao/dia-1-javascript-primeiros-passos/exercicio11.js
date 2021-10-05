let salarioBruto = 1100.00;
let descontoINSS;
let descontoIR;
let salarioBase;
let salarioLiquido;

if ( salarioBruto > 5189.82 ) {
  descontoINSS = 570.88;
}
else if ( salarioBruto >= 2594.93 ) {
  descontoINSS = salarioBruto * 0.11;
}else if ( salarioBruto >= 1556.95 ) {
  descontoINSS = salarioBruto * 0.09;
}
else {
  descontoINSS = salarioBruto * 0.08;
}

salarioBase = salarioBruto - descontoINSS;

if ( salarioBase > 4664.68 ) {
  descontoIR = (salarioBase * .275) - 869.36;
}
else if ( salarioBase >= 3751.06 ) {
  descontoIR = (salarioBase * .225) - 636.13;
}else if ( salarioBase >= 2826.66 ) {
  descontoIR = (salarioBase * .15) - 354.80;
}
else if ( salarioBase >= 1903.99 ) {
  descontoIR = (salarioBase * .075) - 142.80;
}
else {
  descontoIR = 0;
}

salarioLiquido = salarioBase - descontoIR;
console.log(salarioLiquido);