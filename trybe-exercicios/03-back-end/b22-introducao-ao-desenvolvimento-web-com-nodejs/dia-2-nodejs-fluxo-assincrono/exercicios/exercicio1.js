const doMath = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error('Informe apenas números'));
    }
    
    const result = (a + b) * c;
    if (result < 50) reject(new Error('Valor muito baixo'));

    resolve(result);
  });
  return promise;
};

doMath(2, 2, 15)
  .then(result => console.log(result))
  .catch(err => console.error(err.message));

// Resultado: 60

doMath(1, 2, 15)
  .then(result => console.log(result))
  .catch(err => console.error(err.message));

// Resultado: 'Valor muito baixo'

doMath('teste', 2, 15)
  .then(result => console.log(result))
  .catch(err => console.error(err.message));

// Resultado: 'Informe apenas números'