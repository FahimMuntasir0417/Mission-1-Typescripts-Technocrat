let user: {
  name: string;
  age?: number; // optional
};

user = { name: "John" }; // ✔️ OK
user = { name: "John", age: 25 }; // ✔️ OK

// * Optional + Literal
type Button = {
  label: string;
  color?: "red" | "blue" | "green"; // optional + literal type
};

let btn1: Button = { label: "Submit" };
let btn2: Button = { label: "Cancel", color: "red" };

// * 🟪 Combining All Three Types (Object + Literal + Optional)

type User = {
  id: number;
  name: string;
  role: "admin" | "editor" | "viewer"; // literal
  email?: string; // optional
  address?: {
    // optional object
    city: string;
    zip?: number;
  };
};

let u: User = {
  id: 1,
  name: "Alice",
  role: "admin",
  email: "a@gmail.com",
  address: {
    city: "London",
  },
};
