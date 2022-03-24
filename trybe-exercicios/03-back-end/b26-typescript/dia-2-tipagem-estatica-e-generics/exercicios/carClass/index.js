"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("./Car"));
const Colors_1 = __importDefault(require("./Colors"));
const Directions_1 = __importDefault(require("./Directions"));
const Doors_1 = __importDefault(require("./Doors"));
const gol = new Car_1.default('Volksvagem', Colors_1.default.SILVER, 4);
gol.openTheDoor(Doors_1.default.DRIVER);
gol.closeTheDoor(Doors_1.default.DRIVER);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.RIGHT);
gol.speedDown();
gol.stop();
gol.honk();
gol.openTheDoor(Doors_1.default.BEHIND_RIDE);
gol.closeTheDoor(Doors_1.default.BEHIND_RIDE);
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.RIGHT);
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors_1.default.BEHIND_RIDE);
gol.closeTheDoor(Doors_1.default.BEHIND_RIDE);
gol.speedUp();
