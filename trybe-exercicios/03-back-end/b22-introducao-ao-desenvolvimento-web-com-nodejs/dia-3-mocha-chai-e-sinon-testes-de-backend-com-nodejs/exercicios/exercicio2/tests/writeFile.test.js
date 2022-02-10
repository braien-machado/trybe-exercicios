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
    it('returns a string', () => {
      expect(writeFile('./exercise2.txt', 'it works!')).to.be.a('string');
    })
    
    it('returns \'ok\'', () => {
      expect(writeFile('./exercise2.txt', 'it works!')).to.be.equal('ok');
    })
  })
});