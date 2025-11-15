// * Basic Runtime Polymorphism (TS)

class Animal {
  makeSound() {
    console.log("Animal make sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Animal Mke Sound");
  }
}

class Cat extends Dog {
  makeSound() {
    console.log("Animal  Sound");
  }
}

const animals: Animal[] = [new Animal(), new Dog(), new Cat()];

animals.forEach((a) => a.makeSound());
