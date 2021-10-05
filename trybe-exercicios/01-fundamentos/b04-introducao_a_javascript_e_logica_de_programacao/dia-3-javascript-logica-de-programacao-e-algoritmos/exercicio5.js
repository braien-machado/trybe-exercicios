let n = 7;
for (let numberOfAsterisks = 1; numberOfAsterisks <= n; numberOfAsterisks += 1) {
  let pyramid = '';
  for (let spacesBefore = 0; spacesBefore < (n - numberOfAsterisks)/2; spacesBefore += 1) {
    pyramid += ' ';
  }
  for (let index = 1; index <= numberOfAsterisks; index += 1) {
    if (index === 1 || index === numberOfAsterisks) {
      pyramid += '*';
    } else if (numberOfAsterisks === n) {
      pyramid += '*';
    } else {
      pyramid += ' ';
    }
  }
  if(numberOfAsterisks % 2 !== 0) {
    console.log(pyramid);
  } else {}
}