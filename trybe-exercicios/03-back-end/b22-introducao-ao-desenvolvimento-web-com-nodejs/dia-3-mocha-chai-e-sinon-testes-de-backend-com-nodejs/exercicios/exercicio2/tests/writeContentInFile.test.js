const { expect } = require('chai');
const writeContentInFile = require('../writeContentInFile');

describe('test', () => {
  it('if the import is a function', () => {
    expect(writeContentInFile).to.be.a('function');
  });

  // describe('if an error occurs', () => {
  //   it('throws an error', () => {
  //     expect(() => writeContentInFile('', '')).to.throw(`Erro ao escrever o arquivo: err.message`);
  //   });
  // });

  describe('if the file exists', () => {
    const result = writeContentInFile('../exercise2.txt', 'it works!');

    it('returns a string', () => {
      expect(result).to.be.a('string');
    })
    
    it('returns \'ok\'', () => {
      expect(result).to.be.equal('ok');
    })
  })
});