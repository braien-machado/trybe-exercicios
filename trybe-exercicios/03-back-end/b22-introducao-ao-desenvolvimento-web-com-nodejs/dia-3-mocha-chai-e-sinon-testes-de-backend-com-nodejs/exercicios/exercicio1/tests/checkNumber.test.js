const { expect } = require('chai');
const checkNumber = require('../checkNumber');

describe('test', () => {
  it('if the import is a function', () => {
    expect(checkNumber).to.be.a('function');
  })

  it('if the parameter is not a number, throw error', () => {
    const err = 'The parameter must be a number!'
    expect(() => checkNumber('')).to.throw(err);
  })
});