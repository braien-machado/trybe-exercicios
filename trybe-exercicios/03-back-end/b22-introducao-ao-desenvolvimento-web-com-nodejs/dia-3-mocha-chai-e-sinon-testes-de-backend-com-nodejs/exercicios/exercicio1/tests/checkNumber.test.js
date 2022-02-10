const { expect } = require('chai');
const checkNumber = require('../checkNumber');

describe('test', () => {
  it('if the import is a function', () => {
    expect(checkNumber).to.be.a('function');
  });

  describe('if the parameter is not a number,', () => {
    it('throw error', () => {
      const err = 'The parameter must be a number!';

      expect(() => checkNumber('2')).to.throw(err);
    });
  })

  describe('if the parameter is a number,', () => {
    it('it returns a string', () => {
      expect(checkNumber(2)).to.be.a('string')
    });
  });
});