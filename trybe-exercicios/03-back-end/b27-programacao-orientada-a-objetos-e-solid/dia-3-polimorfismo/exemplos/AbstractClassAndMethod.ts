abstract class AbstractAnimal {
  constructor(public name: string) {}
  abstract move(): void
}

class ABird extends AbstractAnimal {
  move() { console.log(`${this.name} está voando.`); }
}
class AMammal extends AbstractAnimal {
  move() { console.log(`${this.name} está andando.`); }
}
class AFish extends AbstractAnimal {
  move() { console.log(`${this.name} está nadando.`); }
}

const af = new AFish('Tubarão');
const ab = new ABird('Papagaio');
const am = new AMammal('Tatu');

const myAMove = (animal: AbstractAnimal) => {
  animal.move();
}
myAMove(af);
myAMove(ab);
myAMove(am);