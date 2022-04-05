interface Logger {
  log(value: string): void 
}

class ConsoleLogger implements Logger {
  constructor() {}

  public log(value: string) {
    console.log(value);
  }
}

class ConsoleLogger2 implements Logger {
  constructor() {}

  public log(value: string) {
    console.log(`A string passada foi: \n${value}`);
  }
}

const customConsole = new ConsoleLogger();
const customConsole2 = new ConsoleLogger2();

customConsole.log('Logger');
customConsole2.log('Logger2');

interface Database {
  logger: Logger,
  save(key: string, value: string): void,
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  public save(key: string, value: string) {
    this.logger.log(`Salva o valor ${value} na chave ${key}`);
  }
}

const database1 = new ExampleDatabase(customConsole);
const database2 = new ExampleDatabase(customConsole2);
const database3 = new ExampleDatabase();

database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');