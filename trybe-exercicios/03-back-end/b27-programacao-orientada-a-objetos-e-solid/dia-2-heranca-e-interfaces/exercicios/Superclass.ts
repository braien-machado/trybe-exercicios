class Superclass {
  constructor(public isSuper: boolean = true) {}

  public sayHello() {
    console.log('Olá, mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super(false);
  }
}

function test(superClass: Superclass) {
  superClass.sayHello();
  if (superClass.isSuper) {
    console.log('Super');
  } else {
    console.log('Sub');
  }
}

const superClass = new Superclass();
const subClass = new Subclass();

test(subClass);
test(superClass);