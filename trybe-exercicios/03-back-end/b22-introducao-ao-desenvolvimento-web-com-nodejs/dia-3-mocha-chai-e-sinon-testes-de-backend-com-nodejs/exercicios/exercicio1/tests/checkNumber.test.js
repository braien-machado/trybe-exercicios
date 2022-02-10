const { expect } = require('chai');
const checkNumber = require('../checkNumber');

describe('test', () => {
  it('if the import is a function', () => {
    expect(checkNumber).to.be.a('function');
  });

  describe('if the parameter is not a number', () => {
    it('throw error', () => {
      const err = 'The parameter must be a number!';

      expect(() => checkNumber('2')).to.throw(err);
    });
  })

  describe('if the parameter is', () => {
    it('a number, it returns a string', () => {
      expect(checkNumber(2)).to.be.a('string');
      expect(checkNumber(0)).to.be.a('string');
      expect(checkNumber(-2)).to.be.a('string');
    });

    it('a positive number, it returns \'positivo\'', () => {
      expect(checkNumber(2)).to.be.equal('positivo');
    });

    it('0, it returns \'neutro\'', () => {
      expect(checkNumber(0)).to.be.equal('neutro');
    });

    it('a negative number, it returns \'negativo\'', () => {
      expect(checkNumber(-2)).to.be.equal('negativo');
    });
  });
});