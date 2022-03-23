// enum daysOfWeek {
//   Sunday = 1,
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
// }
// const sundayNumber = daysOfWeek.Sunday;
// const dayOne = daysOfWeek[1];
// console.log(sundayNumber);
// console.log(dayOne);
// enum rainbowColors {
//   red = "vermelho",
//   orange = "laranja",
//   yellow = "amarelo",
//   green = "verde",
//   blue = "azul",
//   indigo = "indigo",
//   violet = "violeta",
// }
// console.log(rainbowColors.red);
// console.log(rainbowColors['blue']);
// enum actions {
//   salvar,
//   imprimir,
//   abrir,
//   visualizar,
//   fechar,
// }
// console.log(actions.abrir);
// console.log(actions.fechar);
// console.log(actions[1]);
// console.log(actions[3]);
var cardinalPoints;
(function (cardinalPoints) {
    cardinalPoints["Norte"] = "N";
    cardinalPoints["Sul"] = "S";
    cardinalPoints["Leste"] = "L";
    cardinalPoints["Oeste"] = "O";
})(cardinalPoints || (cardinalPoints = {}));
console.log(cardinalPoints.Leste);
console.log(cardinalPoints.Sul);
