// * public (defualt)

class Person {
  public name: string;
  private age: string;

  constructor(name: string, age: string) {
    this.name = name;
    this.age = age;
  }
}

const p = new Person("muntasir", "23");
console.log(p.name);

// *

class Teacher extends Person {
  private weight: number;
  constructor(name: string, age: string, weight: number) {
    super(name, age);
    this.weight = weight;
  }
  getAge() {
    return this.weight;
  }
}

const t = new Teacher("Muntasir", "23", 34);
console.log(t.getAge());

console.log(t.name);
