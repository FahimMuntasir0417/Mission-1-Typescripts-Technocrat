function add(a: number, b: number): number {
  return a + b;
}

// * Function Without Return (void)

function greet(name: string): void {
  console.log("Hello " + name);
}

greet("fahim");

// * Arrow Functions

const multiply = (x: number, y: number): number => {
  return x * y;
};

console.log(multiply(2, 4));

//  Function with Optional Parameters

function sayHello(name?: string): void {
  console.log("hellow " + (name ?? "guest"));
}
sayHello(); // Hello Guest
sayHello("Muntasir");

// * Function with Default Values
function discount(price: number, rate: number = 10): number {
  return price - (price * rate) / 100;
  //   console.log(price - (price * rate) / 100);
}

const p: number = discount(100); // uses default rate = 10
console.log(p);
discount(100, 20); // custom rate
