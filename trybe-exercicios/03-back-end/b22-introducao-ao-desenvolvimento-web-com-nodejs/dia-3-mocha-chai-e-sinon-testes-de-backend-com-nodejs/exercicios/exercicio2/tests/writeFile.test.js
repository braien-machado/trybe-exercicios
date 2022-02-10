const { expect } = require('chai');
const writeFile = require('../writeFile');

describe('test', () => {
  it('if the import is a function', () => {
    expect(writeFile).to.be.a('function');
  });

  describe('if the file does not exist', () => {
    it('throws an error', () => {
      expect(() => writeFile('no-file', '')).to.throw('O arquivo não existe');
    });
  });

  describe('if the file exists', () => {
    const result = writeFile('../exercise2.txt', 'it works!');

    it('returns a string', () => {
      expect(result).to.be.a('string');
    })
    
    it('returns \'ok\'', () => {
      expect(result).to.be.equal('ok');
    })
  })
});