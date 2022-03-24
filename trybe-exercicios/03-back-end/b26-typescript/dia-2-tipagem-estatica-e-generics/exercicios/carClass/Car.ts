import Colors from "./Colors";
import Directions from "./Directions";
import Doors from "./Doors";

export default class Car {
  _brand: string;
  _color: Colors;
  _doors: number

  constructor(brand: string, color: Colors, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }

  honk(): void {
    console.log('Buzinando: Bi Bi!');
  }

  openTheDoor(door: Doors): void {
    console.log(`Abrindo porta: ${door}`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`Fechando porta: ${door}`);
  }

  turnOn(): void {
    console.log('Ligando o carro');
  }

  turnOff(): void {
    console.log('Desligando o carro');
  }

  speedUp(): void {
    console.log('Acelerando');
  }

  speedDown(): void {
    console.log('Desacelerando');
  }

  stop(): void {
    console.log('Parando o carro');
  }

  turn(direction: Directions): void {
    console.log(`Virando o carro para: ${direction}`)
  }
}