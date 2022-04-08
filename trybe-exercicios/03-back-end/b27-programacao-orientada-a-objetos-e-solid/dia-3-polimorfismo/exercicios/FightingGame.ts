abstract class BasicCharacter {
  constructor(public name: string) {}
  abstract talk(): void
  abstract specialMove(): void
}

class MeleeCharacter extends BasicCharacter {
  talk(): void {
    console.log(`${this.name}: Meu alcance é curto.`);
  }
  specialMove(): void {
    console.log(`${this.name} utiliza seu golpe especial de perto.`);
  }
}

class LongRangeCharacter extends BasicCharacter {
  talk(): void {
    console.log(`${this.name}: Meu alcance é grande.`);
  }
  specialMove(): void {
    console.log(`${this.name} utiliza seu golpe especial de longe.`);
  }
}

function useCharacter(character: BasicCharacter) {
  character.talk();
  character.specialMove();
}

const char1 = new MeleeCharacter('Lee Sin');
const char2 = new LongRangeCharacter('Ashe');

useCharacter(char1);
useCharacter(char2);