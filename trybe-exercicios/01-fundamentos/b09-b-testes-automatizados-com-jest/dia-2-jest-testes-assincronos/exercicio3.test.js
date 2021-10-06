// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise , que é utilizada pelo método getUserName .

const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

// describe('verifica se o resultado da função é o esperado', () => {
//   it('quando o usuário 1 é encontrado', async () => {
//     const name = await getUserName(1);
//     expect(name).toBe('Mark');
//   });
//   it('quando o usuário 2 é encontrado', async () => {
//     const name = await getUserName(2);
//     expect(name).toBe('Paul');
//   })
//   it('quando o usuário não é encontrado', async () => {
//     expect.assertions(1);
//     try {
//       await getUserName(3);
//     } catch (error) {
//       expect(error.message).toMatch('User with 3 not found.')
//     }
//   })
// });

describe('verifica se o resultado da função é o esperado', () => {
  it('quando o usuário 1 é encontrado', async () => {
    await expect(getUserName(1)).resolves.toBe('Mark');
  });
  it('quando o usuário 2 é encontrado', async () => {
    await expect(getUserName(2)).resolves.toBe('Paul');
  })
  it('quando o usuário não é encontrado', async () => {
    await expect(getUserName(3)).rejects.toEqual(new Error('User with 3 not found.'))
  })
});