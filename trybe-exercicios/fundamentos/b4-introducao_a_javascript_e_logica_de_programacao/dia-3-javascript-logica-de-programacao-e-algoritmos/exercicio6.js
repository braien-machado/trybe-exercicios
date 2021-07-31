let number = 19;
let primeNumber = true;

for (let divisor = 1; divisor <= number; divisor += 1) {
  if (divisor !== 1 && divisor !== number) {
    let test = number % divisor;
    if (test === 0) {
      primeNumber = false;
      break
    } else {}
  }
}
console.log(primeNumber);