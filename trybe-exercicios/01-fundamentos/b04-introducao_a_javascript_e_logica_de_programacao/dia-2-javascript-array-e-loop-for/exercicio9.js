let arrayNumbers = [];

for(let i = 1; i <= 25; i += 1) {
  arrayNumbers.push(i);
}

for(let i = 0; i < arrayNumbers.length; i += 1) {
  let halfNumber = arrayNumbers[i] / 2;
  console.log(halfNumber);
  console.log();
}