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

const formatCepInput = (cep) => {
  const regex = /\d{5}\d{3}/;

  if (regex.test(cep)) {
    return cep;
  }

  return cep.replace('-', '');
};

const formatCepOutput = (cep) => {
  const regex = /\d{5}-\d{3}/;

  if (regex.test(cep)) {
    return cep;
  }

  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const formatCepInfo = (info) => {
  const formattedCep = formatCepOutput(info.cep);

  return { ...info, cep: formattedCep };
};

const getCep = async (cep) => {
  const formattedCep = formatCepInput(cep);
  const [cepInfo] = await Cep.getCep(formattedCep);

  if (!cepInfo) {
    const error = {
      code: 'notFound',
      message: 'CEP não encontrado',
    };

    return { error };
  }

  return formatCepInfo(cepInfo);
};

const createCep = async (cepInfo) => {
  const cep = await getCep(cepInfo.cep);

  if (!cep.error) {
    const error = {
      code: 'alreadyExists',
      message: 'CEP já existente',
    };

    return { error };
  }

  await Cep.createCep({ ...cepInfo, cep: formatCepInput(cepInfo.cep) });
  return cepInfo;
};

module.exports = {
  isCepValid,
  getCep,
  createCep,
};
