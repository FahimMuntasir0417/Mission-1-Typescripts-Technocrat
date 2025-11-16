let role: "admin" | "user" | "guest";

role = "admin";
role = "guest";
// role = 'owner' ❌ Not allowed

// * number literal
let rating: 1 | 2 | 3 | 4 | 5;

rating = 5; // ✔️
// rating = 6;  // ❌

// * Boolean literal
let isActive: true;

isActive = true; // ✔️
// isActive = false; // ❌ Not allowed
