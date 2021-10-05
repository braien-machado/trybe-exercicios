let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let nextPosition = 1; nextPosition < numbers.length; nextPosition += 1) {
  for(let position = 0; position < nextPosition; position += 1) {
    if(numbers[position] < numbers[nextPosition]) {
      let smallerNumber = numbers[position];
      numbers[position] = numbers[nextPosition];
      numbers[nextPosition] = smallerNumber;
    }
    else{}
  }
}
console.log(numbers);