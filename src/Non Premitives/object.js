//! Explicit Object Type

// let user: {name: String; age:number; isadmin:Boolean} = {
//     name:"muntasir"
//     age:12,
//     isadmin:true
// };

// let user1: { name: string; age: number; isAdmin: boolean } = {
//   name: "muntasir",
//   age: 12,
//   isAdmin: true,
// };

type User3 = {
  name: string,
  age?: number, // optional
};

let u1: User3 = { name: "Asha" };
let u2: User3 = { name: "Rafiq", age: 30 };
console.log(User3.u1);
