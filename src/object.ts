let car: {
  brand: string;
  speed: number;
  start: () => void;
} = {
  brand: "toyata",
  speed: 120,
  start() {
    console.log("Engine started");
  },
};

console.log(car.start());

// * Nested Object Types

let employee: {
  id: number;
  info: {
    name: string;
    department: string;
  };
} = {
  id: 101,
  info: {
    name: "Alice",
    department: "HR",
  },
};

// * eusable Object Type (Type alias)

type Product = {
  id: number;
  title: string;
  price: number;
};

let item1: Product = { id: 1, title: "Book", price: 10 };
let item2: Product = { id: 2, title: "Pen", price: 2 };
