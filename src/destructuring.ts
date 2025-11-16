const numbers = [10, 20, 30];

const [x, y, z] = numbers;

console.log(x, y, z); // 10 20 30

// * Object Destructuring

const user = {
  name: "John",
  age: 25,
  city: "Dhaka",
};

const { name, age } = user;

console.log(name, age);

// * Nested Destructuring

const person = {
  name: "Sam",
  address: {
    city: "Chittagong",
    zip: 4000,
  },
};

const {
  address: { city },
} = person;

console.log(city); // Chittagong
