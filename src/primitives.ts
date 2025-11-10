//* string

let firstName: string = "Muntasir";
let lastName: string = "Bejoy";
let fullName: string = `${firstName} ${lastName}`;
// console.log(fullName);

function User(name: string): string {
  return `Hellow ! ${firstName} ${lastName}`;
}

//! String Manipulation and Formatting

// console.log(User(fullName));

let trimmedName = fullName.toUpperCase();
let trimmedName1 = fullName.toLowerCase();
let trimmedName2 = fullName.split(" ")[1];
let trimmedName3 = `${fullName[-1]}`;

// console.log(trimmedName);
// console.log(trimmedName1);
// console.log(trimmedName3);

let product: string = "laptop";
let price1: number = 111;
let stok: Boolean = false;

let productInfo = `product ${product} price1
 $${price1} Available: ${stok ? "yes" : "NO"}`;
// console.log(productInfo);

//* . Multiline Strings (with Template Literals

let report: string = `Name ${fullName}  Data${new Date().toLocaleDateString()} 
active Status${stok}`;

// console.log(report);

function isValidEmail(email: string): boolean {
  return email.includes("@") && email.includes(".");
}

let email = "muntasirbejoy66@gmailcom";
console.log(`${email} is valid? ${isValidEmail(email)}`);

const Role:string {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

function getPermissions(role: Role): string {
  switch (role) {
    case Role.Admin:
      return "Full access";
    case Role.User:
      return "Limited access";
    case Role.Guest:
      return "Read-only";
  }
}

console.log(getPermissions(Role.Admin));

let bigCount: bigint = 9007199254740993n; // Number.MAX_SAFE_INTEGER + 2
