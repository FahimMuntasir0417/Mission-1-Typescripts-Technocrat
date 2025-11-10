const secret = Symbol("secretKey");

const userData = {
  name11: "Asha",
  [secret]: "token-xyz",
};

for (const key in userData) {
  console.log(key); // logs only "name", not the symbol
}

// console.log(Object.keys(userData)); // ["name"]
// console.log(Object.getOwnPropertySymbols(userData)); // [Symbol(secretKey)]

const password = Symbol("password");

class Account {
  [password]: string;

  constructor(pass: string) {
    this[password] = pass;
  }

  checkPassword(value: string): boolean {
    return this[password] === value;
  }
}

const account = new Account("123455");
console.log(account.checkPassword("123455"));
console.log(account[password]);

// const password1 = Symbol("password");

// class Account2 {
//   [password1]: "secret";

//   constructor(pass: string) {
//     this[password1] = pass;
//   }

//   checkPassword(value: string): boolean {
//     return this[password1] === value;
//   }
// }

// const account2 = new Account2("123455");
// console.log(account2.checkPassword("123455"));
// console.log(account2[password1]);

const password1 = Symbol("password");

class Account2 {
  [password1]: "secret";

  constructor(pass: string) {
    this[password1] = pass;
  }

  checkPassword(value: string): boolean {
    return this[password1] === value;
  }
}

const account2 = new Account2("123455");
console.log(account2.checkPassword("123455"));
console.log(account2[password1]);
