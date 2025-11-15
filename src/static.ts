// * Static Property Example

class Counter {
  static count = 0;
}

console.log(Counter.count); // 0 (no object needed)

// * Static Method Example
class MathUtil {
  static add(a: number, b: number) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 10)); // 15

// * Static vs Instance

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person("Rahim");
console.log(p.name); // instance

// * Using static inside the class
class Student {
  static school = "ABC School";

  info() {
    console.log(Student.school); // access static inside instance method
  }
}

// *Example: Counting Instances with static
class User {
  static totalUsers = 0;

  constructor(public name: string) {
    User.totalUsers++;
  }
}

const u1 = new User("A");
const u2 = new User("B");

console.log(User.totalUsers); // 2
