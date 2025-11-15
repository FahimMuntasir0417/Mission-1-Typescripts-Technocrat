// * OOP Class in TypeScript (Core Structure)

class Person {
  name: string;
  age: number;
  degicnation: string;

  constructor(name: string, age: number, degicnation: string) {
    this.name = name;
    this.age = age;
    this.degicnation = degicnation;
  }

  greet() {
    console.log(`Hi , i am ${this.name}`);
  }
}

const person1 = new Person("Muntasir", 23, "student");
person1.greet();
