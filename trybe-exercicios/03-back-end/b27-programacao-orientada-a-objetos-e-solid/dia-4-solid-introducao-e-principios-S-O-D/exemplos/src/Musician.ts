// Entidades de alto nível não devem depender de entidades de baixo nível. Ambos devem depender de abstrações.
// Se uma função ou classe de alto nível (vamos chamar de H ) utiliza outra função ou classe de mais baixo nível (vamos chamar de L ) em seu interior, L deve ser passada para H por quem chama/usa H , e não estar explicitamente instanciada dentro de H .
// Complementando com a Inversão de Dependência: H não deve esperar especificamente L , mas sim uma abstração qualquer (vamos chamar de A ), que geralmente é uma interface, que L deve respeitar. Isso faz com que, caso queiramos passar algo diferente de L para H , vamos supor uma L2 , desde que L2 também implemente A , não haverá problemas.

interface Instrument {
  name: string;
  play(): void;
}

class Flute implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}

class Drums implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está fazendo o ar vibrar bem forte`);
  }
}

class Guitar implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está vibrando suas cordas`);
  }
}

class Musician {
  constructor(
    public name: string,
    public instrument: Instrument = new Flute('Minha flauta')
  ) { }

  play() {
    this.instrument.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão dos sons`
    );
  }
}

const musician1 = new Musician('Márcia');
const musician2 = new Musician('Vicente', new Drums('Minha bateria'));
const musician3 = new Musician('Natan', new Guitar('Meu violão'));

musician1.play();
musician2.play();
musician3.play();