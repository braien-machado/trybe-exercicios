import ICepAPI from "./ICepAPI";

export default class MockCepAPI implements ICepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
      return `Cep: ${cep}\nNúmero: ${number}\nEndereço: enderecoTeste`;
  }
  
  async getCepByAddress(address: string, number: number): Promise<string> {
    return `Address: ${address}\nNúmero: ${number}\nCep: cepTeste`;
  }
}