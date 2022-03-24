"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const readline_sync_1 = __importDefault(require("readline-sync"));
const Months_1 = __importDefault(require("./Months"));
const Seasons_1 = __importDefault(require("./Seasons"));
const monthsNames = Object.values(Months_1.default).
    map(item => item);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Escolha um mês do ano", { cancel: "SAIR" });
if (choiceMonth === -1) {
    console.log("Saindo!");
    (0, process_1.exit)();
}
const seasonsSouth = {
    [Seasons_1.default.OUTONO]: [Months_1.default.MARÇO, Months_1.default.ABRIL, Months_1.default.MAIO, Months_1.default.JUNHO],
    [Seasons_1.default.INVERNO]: [Months_1.default.JUNHO, Months_1.default.JULHO, Months_1.default.AGOSTO, Months_1.default.SETEMBRO],
    [Seasons_1.default.PRIMAVERA]: [Months_1.default.SETEMBRO, Months_1.default.OUTUBRO, Months_1.default.NOVEMBRO, Months_1.default.DEZEMBRO],
    [Seasons_1.default.VERÃO]: [Months_1.default.DEZEMBRO, Months_1.default.JANEIRO, Months_1.default.FEVEREIRO, Months_1.default.MARÇO],
};
const seasonsNorth = {
    [Seasons_1.default.PRIMAVERA]: seasonsSouth[Seasons_1.default.OUTONO],
    [Seasons_1.default.VERÃO]: seasonsSouth[Seasons_1.default.INVERNO],
    [Seasons_1.default.OUTONO]: seasonsSouth[Seasons_1.default.PRIMAVERA],
    [Seasons_1.default.INVERNO]: seasonsSouth[Seasons_1.default.VERÃO],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
if (choiceHemisphere === -1) {
    console.log("Saindo!");
    (0, process_1.exit)();
}
const month = Object.values(Months_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    if (months.includes(month))
        console.log(seasons);
});
