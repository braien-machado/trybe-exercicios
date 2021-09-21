// 1. A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('sum', () => {
  it('4 + 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('0 + 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it("lança uma mensagem de erro se pelo menos um dos parâmetros não é um número", () => {
    expect(() => sum(4, '5')).toThrow();
  });
  it("lança a mensagem de erro 'parameters must be numbers' se pelo menos um dos parâmetros não é um número", () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});