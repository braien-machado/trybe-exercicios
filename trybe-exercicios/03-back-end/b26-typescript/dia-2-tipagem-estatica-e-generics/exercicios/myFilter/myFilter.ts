type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): T[] {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(myFilter<number>([1,2,3], (item) => {
  return item < 2
}));

console.log(myFilter<string>(['a','b','c'], (item) => {
  return item !== 'a'
}));