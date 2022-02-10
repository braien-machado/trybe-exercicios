const { expect } = require('chai');
const checkNumber = require('../checkNumber');

describe('test', () => {
  it('if the import is a function', () => {
    expect(checkNumber).to.be.a('function');
  })
});