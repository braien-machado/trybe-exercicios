### Atividade 2:

3. Crie uma rota GET /btc/price que receba uma requisição com um token na chave Authorization do headers da requisição e verifique se ele está correto, onde:
    1. O token deve ser uma string de 12 caracteres contendo letras e/ou números.
    2. Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 401 e { "message": "invalid token" } ;
    3. Caso tenha sucesso deve ser feito um fetch em uma API externa de sua preferência e retorne os dados da API como resposta;
Dicas: - Sugestão de API ( https://api.coindesk.com/v1/bpi/currentprice/BTC.json); - O token será passado pelo header da seguinte forma: authorization: 86567349784e; - Utilize middlewares para validar o token; - Para fazer uma requisição a uma API externa utilizer o NODE-FETCH ou AXIOS, parecido com que vimos em Front-end;