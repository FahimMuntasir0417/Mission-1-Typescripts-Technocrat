# Object-Oriented Programming

## Class and Object

- Think of a class as a recipe
  And an object as the cake made from that recipe.

  1. Recipe (class) = instructions
  2. Cake (object) = actual thing created

  ### 📌 Key Points

  ### Class

  - Blueprint

  - Defines properties & methods

  - Used to create objects

  ### Object

  - Instance of a class

  - Contains real data

  - an use class methods

## 🧬 Inheritance Explained (Simple)

- A parent class (base class / super class) contains general properties & methods.

- A child class (derived class / subclass) extends the parent and gets all its features plus its own.

  ### ✅ 1. Reusability

  - Child classes reuse code from parent classes — no need to rewrite.

  ### ✅ 3. super() Keyword

  - Used inside the child constructor to call the parent constructor.

  ### ✅ 4. Parent → Child Relationship

  - hild class gets:

  - Parent properties

  - Parent methods

  ### ✅ 5. Child Can Add New Features

  - Child classes can have their own methods and properties.

  ### ✅ 6. Method Overriding

  - Child class can replace a method from the parent class.

  ### ✅ 7. Reduces Code Duplication

  - Common logic stays in the parent class; specific behavior goes to the child.

  ### ✅ 8. Improves Code Organization

  - Makes the project more structured and easier to maintain.

  ### ✅ 9. One Parent → Many Children

  - Multiple classes can inherit from a single base class.

## 🔍 Type Guard

### 1️⃣ Type Guard using typeof

- typeof is used for primitive types like:

  - "string"

  - "number"

  - "boolean"

  - "bigint"

  - "symbol"

  - "undefined"

  - "object"

  - "function"

### 2️⃣ Type Guard using instanceof

- instanceof is used with classes / constructor functions, not primitives.

### 3️⃣ Comparing typeof vs instanceof

| Feature    | `typeof`                       | `instanceof`                       |
| ---------- | ------------------------------ | ---------------------------------- |
| Works with | Primitive types                | Class instances / objects          |
| Example    | `typeof x === "string"`        | `obj instanceof MyClass`           |
| Use case   | `string`, `number`, `boolean`… | `class User {}`, `class Animal {}` |
| Feature    | `typeof`                       | `instanceof`                       |

## 🔐 Access Modifiers

| Modifier      | Accessible Inside Class | Subclass | Outside via Object | Can Change Value? |
| ------------- | ----------------------- | -------- | ------------------ | ----------------- |
| **public**    | ✔ yes                   | ✔ yes    | ✔ yes              | ✔ yes             |
| **private**   | ✔ yes                   | ✖ no     | ✖ no               | ✔ yes             |
| **protected** | ✔ yes                   | ✔ yes    | ✖ no               | ✔ yes             |
| **readonly**  | ✔ yes                   | ✔ yes    | ✔ yes              | ✖ no (after init) |

## 🔥 Deep Explanation of Getter and Setter in TypeScript

- In TypeScript (and many OOP languages), getters and setters help us protect and control access to the internal state (properties) of a class.

- This is part of encapsulation — hiding internal details and exposing only what is safe.

## 🚀 What is static in TypeScript?

- static means the property or method belongs to the class itself, NOT to its objects (instances).

  ### 🔥 Key Idea:

  - Normal properties/methods → only available through objects
  - Static properties/methods → only available through the class

## 🌀 Polymorphism

### ✅ Features / Types of Polymorphism in TypeScript

- Polymorphism with Method Overriding

  - Child classes replace (override) parent class methods to provide different behavior.

- Polymorphism with Inheritance

  - A parent reference can point to many child objects, each behaving differently.

- Polymorphism with Abstract Classes

  - Abstract classes define abstract methods; child classes implement them in different ways.

- Polymorphism with Interfaces

  - Multiple classes implement the same interface but provide unique implementations for the same method.

- Polymorphism with Method Overloading

  - Same method name with different parameter types or counts (TypeScript allows overload signatures).

- Runtime Polymorphism

  - The decision of which method to execute happens at runtime based on the actual object.

- Compile-time Polymorphism

  - TypeScript resolves method overloading during compilation.

- Polymorphism Through Function Parameters

  - Functions accept a base type but can work with any subclass that overrides the method.

## 🧠Abstraction

### ✅ Features of Abstraction (List)

- Hides complex implementation details

  - Shows only what is necessary to the user.

- Achieved using Abstract Classes

  - Abstract classes can contain abstract + normal methods.

- Achieved using Interfaces

  - Interfaces define structure without implementation.

- Cannot create objects of Abstract Classes

  - They must be extended.

- Abstract Methods have no body

  - Child classes must implement them.

- Forces a common structure

  - All subclasses must follow the same rules.

- Allows Partial Implementation

  - Abstract classes can include:

  - abstract methods

  - normal methods

  - properties

- Supports Polymorphism

  - Multiple classes share the same abstract/interface type.

- Reduces Complexity

  - Keeps code clean and easier to understand.

- Improves Maintenance

  - Common logic stays in one place (the abstract class).

## 💊Encapsulation

### ✅ Features of Encapsulation (List)

- Data Hiding

  - Internal data is hidden using private or protected keywords.

- Controlled Access to Data

  - getters

  - setters
  - public methods

- Protects Object State

  - Prevents accidental or unauthorized changes to internal values.

- Uses Access Modifiers

  - Encapsulation mainly uses:

  - private

  - protected

  - public (controlled access)

- Improves Code Security

  - Sensitive data cannot be accessed directly from outside.

- Increases Code Maintainability

  - You can change internal logic without affecting outside code.

- Prevents Wrong Data Assignment

  - Setters can validate values before saving them.

- Separates Internal Logic From External Usage

  - Users of the class don’t need to know how the class works internally.

- Helps Achieve Abstraction

  - Encapsulation supports abstraction by hiding internal details.

- Prevents Direct Property Manipulation

  - Only safe, validated methods can modify data.

# 📝 OOP Summary

### Object-Oriented Programming (OOP) is a coding approach that organizes software into objects that combine data and behavior. It is built on four key principles: Encapsulation, which hides internal data and exposes only what is needed; Abstraction, which simplifies complex systems by showing only essential features using abstract classes and interfaces; Inheritance, which allows one class to reuse and extend the functionality of another; and Polymorphism, which enables the same method to behave differently depending on the object that uses it. Together, these concepts help developers write cleaner, more reusable, and easy-to-maintain code that models real-world systems effectively.

---

## 🎉 The End — Thank You!

Happy Coding! 😄

<!-- This is a comment and will NOT appear in README -->

---
