// 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const { expect } = require("@jest/globals");
const { doesNotMatch } = require("assert");

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('uppercase "teste" retorna "TESTE"', (done) => {
  uppercase('teste', (str) => {
    try {
      expect(str).toBe("TESTE");
      done();
    } catch (error) {
    done(error);
    }});
})