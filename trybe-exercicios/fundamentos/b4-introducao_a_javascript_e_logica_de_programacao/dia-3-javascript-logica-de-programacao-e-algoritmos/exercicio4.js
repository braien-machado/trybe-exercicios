let n = 5;
for (let numberOfAsterisks = 1; numberOfAsterisks <= n; numberOfAsterisks += 1) {
  let pyramid = '';
  for (let spaces = 0; spaces < (n - numberOfAsterisks)/2; spaces += 1) {
    pyramid += ' ';
  }
  for (let index = 1; index <= numberOfAsterisks; index += 1) {
    pyramid += '*';
  }
  if(numberOfAsterisks % 2 !== 0) {
    console.log(pyramid);
  } else {}
}