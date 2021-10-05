let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
function arrayOfNumbers(vector) {
  let vetorDePares = []
  for (let index = 0; index < vector.length; index += 1) {
    let numbers = vector[index];
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if(numbers[index2] % 2 === 0) {
        vetorDePares.push(numbers[index2]);
      }
    }
  }
  return vetorDePares;
}

console.log(arrayOfNumbers(vector));