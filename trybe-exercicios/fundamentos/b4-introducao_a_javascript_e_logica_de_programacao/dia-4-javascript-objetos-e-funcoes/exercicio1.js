let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
//exercicio 1
console.log('Bem-vinda, ' + info.personagem);

//exercicio 2
info.recorrente = 'Sim';
console.log(info);

//exercicio 3
for (let key in info) {
  console.log(key);
}

//exercicio 4
for (let valor in info) {
  console.log(info[valor]);
}

//exercicio 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O útlimo MacPatinhas',
  recorrente: 'Sim'
}

for (let valores in info, info2) {
  if (info[valores] === info2[valores]) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[valores] + ' e ' + info2[valores]);
  }
}

