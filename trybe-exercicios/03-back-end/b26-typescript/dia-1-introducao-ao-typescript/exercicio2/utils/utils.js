"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readLine = __importStar(require("readline-sync"));
function makeError(unity) {
    throw new Error(`A unidade "${unity}" não é uma unidade válida`);
}
function convert(units, valor, unitBase, unitConvert) {
    const unitToBeConverted = units.indexOf(unitBase);
    const unitToConvertTo = units.indexOf(unitConvert);
    if (!units.includes(unitBase))
        makeError(unitBase);
    if (!units.includes(unitConvert))
        makeError(unitConvert);
    return (valor * 10 ** (unitToConvertTo - unitToBeConverted));
}
function exec(units) {
    const valueToBeConverted = parseInt(readLine.question('Qual o valor para conversão? '), 10);
    const unitToBeConverted = readLine.question('Qual a unidade a ser convertida? Utilize a abreviação. ');
    const unitToGet = readLine.question('Para qual unidade será convertida? Utilize a abreviação. ');
    const convertedValue = convert(units, valueToBeConverted, unitToBeConverted, unitToGet);
    console.log(`${valueToBeConverted}${unitToBeConverted} é igual a ${convertedValue}${unitToGet}`);
}
exports.default = exec;
