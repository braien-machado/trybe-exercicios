const Cep = require('../services/cepService');

const getCep = async (req, res) => {
  const { cep } = req.params;

  const cepInfo = await Cep.getCep(cep);

  if (cepInfo.error) {
    return res.status(404).json(cepInfo.error);
  }

  return res.status(200).json(cepInfo);
};

const createCep = async (req, res) => {
  const {
    cep, logradouro, bairro, uf, localidade,
  } = req.body;

  const createdCep = await Cep.createCep({
    cep, logradouro, bairro, uf, localidade,
  });

  if (createdCep.error) {
    return res.status(409).json(createdCep.error);
  }

  return res.status(201).json(createdCep);
};

module.exports = {
  getCep,
  createCep,
};
