const Cep = require('../models/cepModel');

const isCepValid = (cep) => {
  const regex = /\d{5}-?\d{3}/;

  if (!regex.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      },
    };
  }

  return {};
};

const getCep = async (cep) => {
  const [cepInfo] = await Cep.getCep(cep);

  if (!cepInfo) {
    const error = {
      code: 'notFound',
      message: 'CEP não encontrado',
    };

    return { error };
  }

  return cepInfo;
};

module.exports = {
  isCepValid,
  getCep,
};
