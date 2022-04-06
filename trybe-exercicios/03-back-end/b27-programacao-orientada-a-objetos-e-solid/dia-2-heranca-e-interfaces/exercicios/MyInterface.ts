interface MyInterface {
  myNumber: number,
  myFunc(myParam: number): string,
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  public myFunc(myParam: number): string {
    return `${myParam + this.myNumber}`;
  }
}

const myObject = new MyClass(165);
console.log(myObject.myNumber);
console.log(myObject.myFunc(17));