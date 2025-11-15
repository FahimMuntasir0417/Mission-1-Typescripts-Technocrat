class Person {
  public name: string;
  private age: number;
  protected country: string;
  readonly id: number;
  constructor(name: string, age: number, country: string, id: number) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.id = id;
  }

  public getAge(): number {
    return this.age; // ✅ allowed
  }

  protected getCountry(): string {
    return this.country; //
  }
}

class Student extends Person {
  private grade: string;

  constructor(
    name: string,
    age: number,
    country: string,
    id: number,
    grade: string
  ) {
    super(name, age, country, id);
    this.grade = grade;
  }

  public introduce() {
    // this.age; // ❌ Error: private in Person
    const c = this.getCountry(); // ✅ protected method, subclass can access
    console.log(
      `Hi, I'm ${this.name} from ${c}, in grade ${this.grade}, id=${this.id}`
    );
  }
}

const Muntasir = new Person("Muntasir", 20, "Bangladesh", 101);
const Fahim = new Student("fahim", 23, "Londand", 201, "A+");
console.log(Fahim.introduce());
