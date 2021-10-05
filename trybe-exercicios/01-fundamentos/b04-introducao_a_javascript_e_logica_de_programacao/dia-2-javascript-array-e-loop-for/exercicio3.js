let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let divisor = numbers.length;

for(let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

let average = sum / divisor;
console.log(average);