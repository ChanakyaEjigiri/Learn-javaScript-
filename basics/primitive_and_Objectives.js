/*
PRIMITIVE DATATYPES IN JAVASCRIPT

In JavaScript, primitive datatypes are the most basic data types that represent single values and are not objects. They are immutable, meaning their values cannot be changed once created.

The primitive datatypes in JavaScript are:

string
number
boolean
undefined
null
symbol (introduced in ES6)
bigint (introduced in ES2020)
*/
// Examples of each primitive datatype:
let str = "Hello, World!"; // string
let num = 42;          // number
let bool = true;       // boolean
let undef;            // undefined
let n = null;         // null
let sym = Symbol("unique"); // symbol
let bigIntNum = 9007199254740991n; // bigint
let bigIntNum2 = BigInt(9007199254740991); // bigint using BigInt function
console.log(typeof str);      // Outputs: string
console.log(typeof num);      // Outputs: number
console.log(typeof bool);     // Outputs: boolean
console.log(typeof undef);    // Outputs: undefined
console.log(typeof n);        // Outputs: object (this is a known quirk in JavaScript)
console.log(typeof sym);      // Outputs: symbol
console.log(typeof bigIntNum); // Outputs: bigint
console.log(typeof bigIntNum2); // Outputs: bigint


/*
OBJECTS IN JAVASCRIPT
Objects in JavaScript are collections of key-value pairs, where keys are strings (or Symbols) and values can be any datatype, including other objects. Objects are mutable, meaning their properties can be changed, added, or removed.

Objects can be created using object literals, the Object constructor, or classes (introduced in ES6).
*/


// Example of creating an object using an object literal:

let person = {name: "Alice", age: 30, isStudent: false};
console.log(person.name); // Outputs: Alice
console.log(person["age"]); // Outputs: 30
person.age = 31; // Modifying a property
console.log(person.age); // Outputs: 31
person.city = "New York"; // Adding a new property
console.log(person.city); // Outputs: New York
delete person.isStudent; // Removing a property
console.log(person.isStudent); // Outputs: undefined
console.log(typeof person); // Outputs: object

/*OBJECTIVES
1. Understand the difference between primitive datatypes and objects in JavaScript.
2. Learn how to create and manipulate primitive datatypes.
3. Learn how to create and manipulate objects.
4. Understand the concept of immutability in primitive datatypes and mutability in objects.
5. Learn about the different methods available for objects.
*/