// function print(value: string | number):  {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase()); // string methods allowed
//   } else {
//     console.log(value.toFixed(2)); // number methods allowed
//   }
// }
// console.log(print(3));
// const answer: string | number = print(3);
// console.log(answer);
// const answer1: string | number = print("Muntasir");
// console.log(answer1);

// * instanceof
class Dog {}
const d = new Dog();
if (d instanceof Dog) {
  // console.log("It is a Dog")
}

// * operaters

type User = { name: string };
type Admin = { name: string; role: string };

function check(person: User | Admin) {
  if ("role" in person) {
    console.log(person.role); // Admin
  } else {
    console.log(person.name); // User
  }
}

check({ name: "muntasir", role: "Admin" });
