// ! Getter in TypeScript

class Person {
  private _age: number;
  private id: number;

  constructor(age: number, id: number) {
    this._age = age;
    this.id = id;
  }

  get age() {
    return this._age;
    return this.id; // return private value
  }
}

const p = new Person(20, 201);
console.log(p.age); // ✔ getter works like a property
// console.log(p.id) Doesn't access

// * Setter in TypeScript

class Person2 {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  }
}

const p2 = new Person2(20);
p2.age = 25; // ✔ setter
console.log(p2.age); // 25

// *  Getter-only (read-only property)

class Bank {
  private _balance = 1000;

  get balance() {
    return this._balance;
  }
}

const b = new Bank();
console.log(b.balance); // ✔ can read
// b.balance = 5000;    // ❌ cannot write (no setter)
// * Setter-only (write-only property)

class User {
  private _password: string = "";

  set password(value: string) {
    this._password = value;
  }
}

const u = new User();
u.password = "topsecret"; // ✔ can write
// console.log(u.password); // ❌ error: no getter

// * Full Getter+Setter Example (Best Practice)

class Employee {
  private _salary: number = 0;

  get salary() {
    return this._salary;
  }

  set salary(amount: number) {
    if (amount < 0) {
      throw new Error("Salary cannot be negative");
    }
    this._salary = amount;
  }
}

const e = new Employee();
e.salary = 50000; // setter
console.log(e.salary); // getter → 50000
