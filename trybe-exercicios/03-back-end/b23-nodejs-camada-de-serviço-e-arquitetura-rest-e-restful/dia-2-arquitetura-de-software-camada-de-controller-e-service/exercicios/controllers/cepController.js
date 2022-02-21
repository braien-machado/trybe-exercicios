const Cep = require('../services/cepService');

const getCep = async (req, res) => {
  const { cep } = req.params;

  const cepInfo = await Cep.getCep(cep);

  if (cepInfo.error) {
    return res.status(404).json(cepInfo.error);
  }

  return res.status(200).json(cepInfo);
};

module.exports = {
  getCep,
};
