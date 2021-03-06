// 5. Crie uma API de dados das personagens de Simpsons
// Crie um arquivo chamado simpsons.json e popule com os seguintes dados:

// [
//   {
//     "id": "1",
//     "name": "Homer Simpson"
//   },
//   {
//     "id": "2",
//     "name": "Marge Simpson"
//   },
//   {
//     "id": "3",
//     "name": "Bart Simpson"
//   },
//   {
//     "id": "4",
//     "name": "Lisa Simpson"
//   },
//   {
//     "id": "5",
//     "name": "Maggie Simpson"
//   },
//   {
//     "id": "6",
//     "name": "Ned Flanders"
//   },
//   {
//     "id": "7",
//     "name": "Montgomery Burns"
//   },
//   {
//     "id": "8",
//     "name": "Nelson Muntz"
//   },
//   {
//     "id": "9",
//     "name": "Krusty"
//   },
//   {
//     "id": "10",
//     "name": "Milhouse Van Houten"
//   }
// ]

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const authMiddleware = require('./authMiddleware');
const generateToken = require('./generateToken');

const app = express();

app.use(bodyParser.json());

app.use(authMiddleware);

// 6. Crie um endpoint GET /simpsons
// O endpoint deve retornar um array com todos os simpsons.

app.get('/simpsons', function (req, res, next) {
  fs.readFile('./simpsons.json', 'utf8')
    .then((result) => {
      const array = JSON.parse(result);
      res.status(200).json(array);
    })
    .catch((err) => next(err));
});

// 7. Crie um endpoint GET /simpsons/:id
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .

app.get('/simpsons/:id', function (req, res, next) {
  const { id } = req.params;
  fs.readFile('./simpsons.json', 'utf8')
    .then((result) => {
      const array = JSON.parse(result);

      const character = array.find((char) => char.id === id);

      if (!character) return res.status(404).json({message: 'simpson not found'});

      res.status(200).json(character);
    })
    .catch((err) => next(err));
});

// 8. Crie um endpoint POST /simpsons .
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); .

app.post('/simpsons', async function (req,res, next) {
  try {
    const { id, name } = req.body;
    const contentFile = await fs.readFile('./simpsons.json', 'utf8');
  
    const simpsons = JSON.parse(contentFile);
    
    const idAlreadyUsed = simpsons.some((char) => char.id === id);
  
    if (idAlreadyUsed) return res.status(409).json({message: 'id already exists'});
    simpsons.push({ id, name });
  
    fs.writeFile('./simpsons.json', JSON.stringify(simpsons))
      .then(() => {
          res.status(204).end();
        }
      );
  } catch (error) {
    next(error);
  }
});

// Bonus 2. Crie uma rota POST /signup
// A rota deve receber, no body da requisição, os campos email , password , firstName e phone .
// Caso algum dos campos não esteja preenchido, a response deve possuir status 401 - Unauthorized e o JSON { message: 'missing fields' } .
// Caso todos os parâmetros estejam presentes, a rota deve gerar um token aleatório válido, e a resposta deve conter o status 200 - OK , e o JSON { token: '<token-aleatorio>' } .

app.post('/signup', function(req, res, next) {
  try {
    const { email, password, firstName, phone } = req.body;
  
    if ([email, password, firstName, phone].includes(undefined)) return res.status(401).json({ message: 'missing fields' });
  
    const token = generateToken();
  
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
});

app.use(function (err, _req, res, _next) {
  return res.status(500).send({ message: 'Erro na lógica' });
});

app.all('*', function (_req, res) {
  res.status(404).send({ message: 'Page not found!' });
});

app.listen(3001, () => {
  console.log('Aplicativo ouvindo na porta 3001');
});
