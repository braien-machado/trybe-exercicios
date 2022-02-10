const { expect } = require('chai');
const writeFile = require('../writeFile');

describe('test', () => {
  it('if the import is a function', () => {
    expect(writeFile).to.be.a('function');
  });
});