let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
let lengthNumbers = numbers.length;
for(let index = 0; index < lengthNumbers; index += 1) {
  if(index < lengthNumbers -1){
    newNumbers.push(numbers[index] * numbers[index + 1]);
  }
  else {
    newNumbers.push(numbers[index] * 2);
  }
}

console.log(newNumbers);