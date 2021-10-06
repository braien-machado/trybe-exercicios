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

// 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

// Uma forma de fazer:
// describe('verifica se o resultado da função é o esperado', () => {
//   it('quando o usuário 1 é encontrado', () => {
//     expect.assertions(1);
//     return getUserName(1).then((name) => {
//       expect(name).toBe('Mark');
//     })
//   });
//   it('quando o usuário 2 é encontrado', () => {
//     expect.assertions(1);
//     return getUserName(2).then((name) => {
//       expect(name).toBe('Paul');
//     })
//   });
//   it('quando o usuário não é encontrado', () => {
//     expect.assertions(1);
//     return getUserName(3).catch((error) => {
//       expect(error).toEqual(new Error(`User with 3 not found.`));
//     })
//   });
// });

describe('verifica se o resultado da função é o esperado', () => {
  it('quando o usuário 1 é encontrado', () => (
    expect(getUserName(1)).resolves.toBe('Mark')
  ));
  it('quando o usuário 2 é encontrado', () => (
    expect(getUserName(2)).resolves.toBe('Paul')
  ))
  it('quando o usuário não é encontrado', () => (
    expect(getUserName(3)).rejects.toEqual(new Error('User with 3 not found.'))
  ))
});
