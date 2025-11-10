//*optional Properties

type User3 = {
  name: string;
  age?: number; // optional
};

let u1: User3 = { name: "Asha" };
let u2: User3 = { name: "Rafiq", age: 30 };
console.log(u1);

//& read only properties

type product = {
  readonly id: number;
  name: string;
};
let item: product = { id: 320, name: "laptop" };
console.log(item.id);
console.log(item.name);
