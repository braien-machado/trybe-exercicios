let valorCusto = 9.50;
let valorVenda = 17.98;

let impostoSobreCusto = valorCusto*0.2;
let valorCustoTotal = valorCusto + impostoSobreCusto;

let lucroUnidade = valorVenda - valorCustoTotal;

console.log('O lucro que a empresa terá ao vender mil desses produtos é ' + (lucroUnidade * 1000));

