let n = 5;
let squareOfAsterisk = '';
if (n <=1){
  console.log("Error. 'n' must be greater than 1");
} else {
  for (let index = 1; index <= n; index += 1) {
    squareOfAsterisk += '*';
  }
  for (let index = 1; index <= n; index += 1) {
    console.log(squareOfAsterisk);
  }
}