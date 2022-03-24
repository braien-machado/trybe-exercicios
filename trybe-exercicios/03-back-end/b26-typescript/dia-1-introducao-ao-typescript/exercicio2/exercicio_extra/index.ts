import { exit } from "process";
import readline from "readline-sync";
import Months from "./Months";
import Seasons from "./Seasons";

const monthsNames = Object.values(Months).
    map(item => item);

const choiceMonth = readline.keyInSelect(monthsNames, "Escolha um mês do ano", { cancel: "SAIR" });

if (choiceMonth === -1) {
    console.log("Saindo!");
    exit();
}

const seasonsSouth = {
    [Seasons.OUTONO]: [Months.MARÇO, Months.ABRIL, Months.MAIO, Months.JUNHO],
    [Seasons.INVERNO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
    [Seasons.PRIMAVERA]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
    [Seasons.VERÃO]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARÇO],
}

const seasonsNorth = {
    [Seasons.PRIMAVERA]: seasonsSouth[Seasons.OUTONO],
    [Seasons.VERÃO]: seasonsSouth[Seasons.INVERNO],
    [Seasons.OUTONO]: seasonsSouth[Seasons.PRIMAVERA],
    [Seasons.INVERNO]: seasonsSouth[Seasons.VERÃO],
}

const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");

if (choiceHemisphere === -1) {
    console.log("Saindo!");
    exit();
}

const month = Object.values(Months)[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere]
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];

    if (months.includes(month)) console.log(seasons);
});