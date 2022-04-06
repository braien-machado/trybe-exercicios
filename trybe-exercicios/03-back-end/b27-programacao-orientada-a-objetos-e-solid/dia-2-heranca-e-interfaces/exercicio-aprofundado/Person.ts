export default class Person {
  private _name: string = String();
  private _birthDate: Date = new Date();

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }

  public get name(): string { return this._name }

  private set name(value: string) {
    Person.validateName(value);
    this._name = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }
  public set birthDate(value: Date) {
    Person.validateBirthDate(value);
    this._birthDate = value;
  }

  private static getAge(value: Date): number {
    const diff = Math.abs(Date.now() - value.getTime());
    const yearMs = 31_536_000_000;

    return Math.floor(diff/yearMs);
  }

  private static validateName(value: string) {
    if (value.length < 3) throw new Error('name must be at least 3 character long.');
  }
  private static validateBirthDate(value: Date) {
    if (value.getTime() > Date.now()) throw new Error('birthdate cannot be a future date');
    if (Person.getAge(value) > 120) throw new Error('person cannot be older than 120 years');
  }
}