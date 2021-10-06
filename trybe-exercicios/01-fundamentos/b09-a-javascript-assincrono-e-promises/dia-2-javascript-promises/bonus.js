// Refatore a Promise para utilizar somente async e await .
const sumRandomNumbers = () => {
  const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);
  const sum = array.map((number) => number ** 2).reduce((acc, number) => acc + number, 0);
  if (sum >= 8000) throw new Error();
  return sum;
}

const sumArrayFromSum = (sum) => [2, 3, 5, 10].map((divisor) => sum/divisor)
  .reduce((acc, number) => acc + number, 0);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum(sum);
    console.log(sumFromSum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();
