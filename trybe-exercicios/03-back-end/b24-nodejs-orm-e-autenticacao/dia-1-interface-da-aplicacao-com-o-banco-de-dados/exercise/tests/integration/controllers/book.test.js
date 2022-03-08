const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../index');
const { Book } = require('../../../models');

describe('Busca todos os livros', () => {
  const findAllStub = stub(Book, 'findAll');

  describe('quando não existe nenhum livro cadastrado', () => {

    before(() => {
      findAllStub.resolves([]);
    });

    after(() => {
      findAllStub.restore();
    });

    it('called Book.findAll', async () => {
      await chai.request(app)
        .get('/books');

      expect(Book.findAll.calledOnce).to.be.equals(true);
    });

    it('o status é 200', async () => {
      const result = await chai.request(app)
        .get('/books');

      expect(result.status).to.be.equals(200);
    });

    it('a resposta é um array', async () => {
      const result = await chai.request(app)
        .get('/books');

      expect(result.body).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const result = await chai.request(app)
        .get('/books');

      expect(result.body).to.be.empty;
    });
  });

  describe('quando existe pelo menos um livro cadastrado', () => {
    const findAllResponse = [
      {
        title: 'A Filha do Rei: Série DarkTuar livro 1',
        author: 'Kalyla Nunes',
        pageQuantity: 428,
      },
      {
        title: 'Acordo de Colegas de Classe - Livro 1',
        author: 'Ariane Costa',
        pageQuantity: 494,
      },
    ];

    before(() => {
      findAllStub.resolves(findAllResponse);
    });

    after(() => {
      findAllStub.restore();
    });

    it('called Book.findAll', async () => {
      await chai.request(app)
        .get('/books');

        console.log(Book.findAll);

      expect(Book.findAll.calledOnce).to.be.equals(true);
    });

    it('o status é 200', async () => {
      const result = await chai.request(app)
        .get('/books');

      expect(result.status).to.be.equals(200);
    });

    it('a resposta é um array', async () => {
      const result = await chai.request(app)
        .get('/books');

      expect(result.body).to.be.an('array');
    });

    it('o array contém objetos com as propriedades esperadas', async () => {
      const expectedProperties = ['title', 'author', 'id', 'createdAt', 'pageQuantity', 'updatedAt']
      const result = await chai.request(app)
        .get('/books');

      result.body.forEach((e) => {
        expect(e).to.be.an('object')
        expect(e).to.have.keys(expectedProperties);
      });
    });
  });
});