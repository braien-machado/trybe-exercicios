"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, color, doors) {
        this._brand = brand;
        this._color = color;
        this._doors = doors;
    }
    honk() {
        console.log('Buzinando: Bi Bi!');
    }
    openTheDoor(door) {
        console.log(`Abrindo porta: ${door}`);
    }
    closeTheDoor(door) {
        console.log(`Fechando porta: ${door}`);
    }
    turnOn() {
        console.log('Ligando o carro');
    }
    turnOff() {
        console.log('Desligando o carro');
    }
    speedUp() {
        console.log('Acelerando');
    }
    speedDown() {
        console.log('Desacelerando');
    }
    stop() {
        console.log('Parando o carro');
    }
    turn(direction) {
        console.log(`Virando o carro para: ${direction}`);
    }
}
exports.default = Car;
