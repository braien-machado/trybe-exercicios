let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let divisor = numbers.length;

for(let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}

let mediaAritmetica = soma / divisor;
console.log(mediaAritmetica);