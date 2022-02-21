

  ## Exercícios

 - [x] 1. Crie uma nova API utilizando o express

  

 - [x] 2. A aplicação deve ser um pacote Node.js

  

 - [x] 3. Dê ao pacote o nome de cep-lookup

  

 - [x] 4. Utilize o express para gerenciar os endpoints da sua aplicação

  

 - [x] 5. A aplicação deve ter a rota GET /ping , que retorna o status 200 OK e o seguinte JSON:

  

		{ "message": "pong!" }

  

 - [x] 6. A aplicação deve escutar na porta 3000

  

 - [x] 7. Deve ser possível iniciar a aplicação através do comando npm start .

  

 - [ ] 8. Crie o endpoint GET /cep/:cep

  

 - [ ] 9. O endpoint deve receber, no parâmetro :cep , um número de CEP válido.

  

 - [ ] 10. O CEP precisa conter 8 dígitos numéricos e pode ou não possui traço.

	- Dica Utilize o regex \d{5}-?\d{3} para validar o CEP.

  

 - [ ] 11. Caso o CEP seja inválido, retorne o status 400 Bad Request e o seguinte JSON:

  

		{ "error": { "code": "invalidData", "message": "CEP inválido" } }

  

 - [ ] 12. Caso o CEP seja válido, realize uma busca no banco de dados.

  

 - [ ] 13. Caso o CEP não exista no banco de dados, retorne o status 404 Not Found e o seguinte JSON:

  

		{ "error": { "code": "notFound", "message": "CEP não encontrado" } }

  

 - [ ] 14. Caso o CEP exista, retorne o status `200 OK` e os dados do CEP no seguinte formato:

  

		{



		"cep": "01001-000",



		"logradouro": "Praça da Sé",



		"bairro": "Sé",



		"localidade": "São Paulo",



		"uf": "SP",



		}

  

 - [ ] 15. Crie o endpoint POST /cep

  

 - [ ] 16. O endpoint deve receber a seguinte estrutura no corpo da requisição:

  

		{



		"cep": "01001-000",



		"logradouro": "Praça da Sé",



		"bairro": "Sé",



		"localidade": "São Paulo",



		"uf": "SP",



		}

  

 - [ ] 17. Todos os campos são obrigatórios

  

 - [ ] 18. Utilize o Joi para realizar a validação. Em caso de erro, retorne o status 400 Bad Request , com o seguinte JSON:

  

		{ "error": { "code": "invalidData", "message": "<mensagem do Joi>" } }

  

 - [ ] 19. O CEP deve ser composto por 9 dígitos com traço.

  

	- Dica : Utilize o seguinte regex para validar o CEP: \d{5}-\d{3}

  

 - [ ] 20. Se o CEP já existir, retorne o status 409 Conflict com o seguinte JSON:

  

		{



		"error": { "code": "alreadyExists", "message": "CEP já existente" }



		}

  

 - [ ] 21. Se o CEP ainda não existir, armazene-o no banco de dados e retorne o status 201 Created com os dados do novo CEP no seguinte formato:

  

		{



		"cep": "01001-000",



		"logradouro": "Praça da Sé",



		"bairro": "Sé",



		"localidade": "São Paulo",



		"uf": "SP",



		}

  ## Bônus
  - [ ]  1.  Utilize uma API externa para buscar CEPs que não existem no banco de dados
    
 - [ ] 2.  Quando um CEP não existir no banco de dados, utilize a API  [https://viacep.com.br/ws/[numero-do-cep]/json/](https://viacep.com.br/ws/[numero-do-cep]/json/) para obter suas informações.
    
 - [ ] 3.  Caso o CEP não exista na API externa, você receberá o JSON  `{ "erro": true }`  . Nesse caso, retorne status  `404 Not Found`  com o seguinte JSON:

			{ "error": { "code": "notFound", "message": "CEP não encontrado" } }
 - [ ] 4.  Caso o CEP exista na API externa, armazene-o no banco e devolva seus dados no seguinte formato:

		{
		  "cep": "01001-000",
		  "logradouro": "Praça da Sé",
		  "bairro": "Sé",
		  "localidade": "São Paulo",
		  "uf": "SP",
		}

	- **Dica** : Na arquitetura MSC, os models são responsáveis por **toda a comunicação externa** de uma aplicação, o que inclui APIs externas. Logo, você precisará de um model para acessar a API.
