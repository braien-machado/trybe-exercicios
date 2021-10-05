let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber = numbers[0];

for(let i = 1; i < numbers.length; i += 1) {
  if(numbers[i] < smallestNumber){
    smallestNumber = numbers[i];
  }
  else{}
}

console.log(smallestNumber);