const { encode, decode } = require('./encode-decode');

// Para as funções encode e decode crie os seguintes testes:
// Teste se encode e decode são funções;
// Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

describe('encode and decode are functions', () => {
  it('encode is function', () => {
    expect(typeof encode).toBe('function');
  });
  it('decode is function', () => {
    expect(typeof decode).toBe('function');
  });
});

describe('encode works', () => {
  it("encode('a') results '1'", () => {
    expect(encode('a')).toBe('1');
  });
  it("encode('e') results '2'", () => {
    expect(encode('e')).toBe('2');
  });
  it("encode('i') results '3'", () => {
    expect(encode('i')).toBe('3');
  });
  it("encode('o') results '4'", () => {
    expect(encode('o')).toBe('4');
  });
  it("encode('u') results '5'", () => {
    expect(encode('u')).toBe('5');
  });
});

describe('decode works', () => {
  it("decode('1') results 'a'", () => {
    expect(decode('1')).toBe('a');
  });
  it("decode('2') results 'e'", () => {
    expect(decode('2')).toBe('e');
  });
  it("decode('3') results 'i'", () => {
    expect(decode('3')).toBe('i');
  });
  it("decode('4') results 'o'", () => {
    expect(decode('4')).toBe('o');
  });
  it("decode('5') results 'u'", () => {
    expect(decode('5')).toBe('u');
  });
});

describe('decode and encode does not change other numbers or letters', () => {
  it("decode('6789') results '6789'", () => {
    expect(decode('6789')).toBe('6789');
  });
  it("encode('bcdfghjklmnpqrstvwxyz') results ''bcdfghjklmnpqrstvwxyz''", () => {
    expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
  });
});

describe('encode and decode returns string with same length', () => {
  it("decode(string).length equals to string.length", () => {
    expect(decode('testing').length).toBe('testing'.length);
  });
  it("encode(string).length equals to string.length", () => {
    expect(encode('t2st3ng').length).toBe('t2st3ng'.length);
  });
});
