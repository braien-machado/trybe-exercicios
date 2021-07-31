let n = 5;
let rightTriangleOfAsteriskRight = '';
for (let index = 1; index <= n; index += 1) {
    rightTriangleOfAsteriskRight += '*';
    let spaces = ''
    for (let indexSpaces = n-index; indexSpaces > 0; indexSpaces -= 1) {
      spaces += ' ';
    }
    let rightTriangleSpaces = spaces + rightTriangleOfAsteriskRight;
    console.log(rightTriangleSpaces);
  }