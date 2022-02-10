// Exercício 4 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
// Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
// Após concluir a escrita do arquivo ela deverá retornar um ok .
// Descreva todos os cenários de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se o retorno da função possui o valor e tipo esperado.
// Exercício 5 Implemente a função descrita no exercício 4.
// Crie a função descrita no exercício 4 utilizando o módulo fs do node.
// Adapte os testes adicionando stub ao módulo utilizado do fs , isolando assim o teste.
// Garanta que todos os testes escritos no exercício 4 irão passar com sucesso.

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