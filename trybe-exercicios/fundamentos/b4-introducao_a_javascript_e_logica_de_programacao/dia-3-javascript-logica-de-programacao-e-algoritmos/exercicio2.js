let n = 5;
let rightTriangleOfAsterisk = '';
if (n <=1){
  console.log("Error. 'n' must be greater than 1");
} else {
  for (let index = 1; index <= n; index += 1) {
    rightTriangleOfAsterisk += '*';
    console.log(rightTriangleOfAsterisk);
  }
}