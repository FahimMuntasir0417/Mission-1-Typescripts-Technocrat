class Dog {
  beak() {
    console.log("woof!");
  }
}

class Cat {
  meow() {
    console.log("meow");
  }
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.beak();
  } else {
    animal.meow();
  }
}

speak(new Dog());
