const myName = 'Luis';
const myAge = 31;
const suma = (a: number, b: number) => {
  return a + b;
};

suma(1, 2);

class Persona {
  private age;
  private name;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `My name is ${this.name} and I am ${this.age} years old`;
  }
}

const luis = new Persona(myAge, myName);
console.log(luis.getSummary());
