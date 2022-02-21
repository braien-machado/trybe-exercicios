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

module.exports = {
  getCep,
};
