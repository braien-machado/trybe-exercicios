const connection = require('./connection');

const getCep = async (cepNumber) => {
  const query = (
    `SELECT *
    FROM cep_lookup.ceps
    WHERE cep = ?`
  );

  const [cep] = await connection.execute(query, [cepNumber]);

  return cep;
};

const createCep = async ({
  cep, logradouro, bairro, localidade, uf,
}) => {
  const query = (
    `INSERT INTO cep_lookup.ceps ('cep','logradouro','bairro','localidade','uf')
    VALUES(?,?,?,?,?)`
  );

  const created = await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  console.log(created);
  return created;
};

module.exports = {
  getCep,
  createCep,
};
