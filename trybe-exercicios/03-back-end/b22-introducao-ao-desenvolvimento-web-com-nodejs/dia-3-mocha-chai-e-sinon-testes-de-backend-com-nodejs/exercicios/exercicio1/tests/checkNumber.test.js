// Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
// Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// Descreva todos os cenário de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.
// Exercício 2 : Implemente a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes que você escreveu.
// DICA : Lembre-se de adicionar o script de test no package.json e de instalar as dependências.
// Exercício 3 Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number .
// Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a Number para a função;
// Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
// Implemente em sua função tal validação para que o teste passe.

const { expect } = require('chai');
const checkNumber = require('../checkNumber');

describe('test', () => {
  it('if the import is a function', () => {
    expect(checkNumber).to.be.a('function');
  });

  describe('if the parameter is not a number', () => {
    it('returns a string with a warning', () => {
      const err = 'o valor deve ser um número';

      expect(checkNumber('2')).to.be.equal(err);
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