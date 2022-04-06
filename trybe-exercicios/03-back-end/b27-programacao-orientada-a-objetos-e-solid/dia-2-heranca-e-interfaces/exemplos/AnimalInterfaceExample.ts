interface AnimalI {
  name: string;
  age: number;

  getBirthDate(): Date;
}

class Parrot implements AnimalI {
  constructor(
    public name: string,
    private birthDate: Date) {}

  get age() {
    var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  getBirthDate() { return this.birthDate; }

  fly() { console.log(`${this.name} está voando!`); }
}

const parrot1 = new Parrot(
  'Papagaio',
  new Date(Date.parse('Aug 16, 2015')),
);

console.log(parrot1.age);
parrot1.fly();
