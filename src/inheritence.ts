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

class Teacher extends Person {
  weight: string;

  constructor(name: string, age: number, degicnation: string, weight: string) {
    super(name, age, degicnation);
    this.weight = weight;
  }
}

const teacher = new Teacher("Muntasir", 23, "Teacher", "23 kg");
teacher.greet();
console.log(teacher.degicnation);
