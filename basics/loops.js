// LOOPS IN JAVASCRIPT
/* 
Loops are used to execute a block of code repeatedly until a specified condition is met.

Types of loops:
1. for loop
2. while loop
3. do...while loop

Special loops:
4. for...in loop   (iterate over object properties)
5. for...of loop   (iterate over iterable values)

Loop controls:
6. continue statement
7. break statement
8. labels in loops
*/

//==================================================================================================
// for LOOP
/*
Definition: A for loop is used to repeat a block of code a specific number of times.
It is commonly used when the number of iterations is known beforehand.

Syntax:
for (initialization; condition; increment/decrement) {
    // code to be executed
}

- initialization: Executed once before the loop starts (commonly to initialize a counter).
- condition: Evaluated before each iteration. If true → executes loop body. If false → exits loop.
- increment/decrement: Executed after each iteration (commonly to update the counter).
*/
for (let i = 0; i < 5; i++) {
    console.log("for loop iteration:", i);
}
// Output: 0 1 2 3 4

//==================================================================================================
// while LOOP
/*
Definition: A while loop executes a block of code as long as a specified condition is true.

Syntax:
while (condition) {
    // code to be executed
}

 Make sure the condition eventually becomes false, otherwise it creates an infinite loop.
*/
let j = 0;
while (j < 5) {
    console.log("while loop iteration:", j);
    j++;
}
// Output: 0 1 2 3 4

//==================================================================================================
// do...while LOOP
/*
Definition: A do...while loop executes the block of code at least once,
and then continues looping while the condition is true.

Syntax:
do {
    // code to be executed
} while (condition);
*/
let k = 0;
do {
  k++;
  console.log("do...while loop iteration:", k);
} while (k < 5);
// Output: 1 2 3 4 5

//==================================================================================================
// for...in LOOP
/*
Definition: Iterates over the enumerable properties (keys) of an object.

Syntax:
for (variable in object) {
    // code to be executed
}
*/
const marks = { ram: 45, krish: 32, bharath: 50 }; 
for (let key in marks) {
    console.log("Marks of " + key + ":", marks[key]);
}
// Output: ram: 45, krish: 32, bharath: 50

//==================================================================================================
// for...of LOOP
/*
Definition: Iterates over the values of an iterable (Array, String, Map, Set, etc.).

Syntax:
for (variable of iterable) {
    // code to be executed
}
*/
const arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log("Array value:", value);
}
// Output: 10 20 30 40 50

//==================================================================================================
// continue statement
/*
Definition: Skips the current iteration of a loop and moves to the next iteration.

Syntax:
continue;
continue label;   // with labels (advanced usage)
*/
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log("Odd number:", i);
}
// Output: 1 3 5 7 9

//==================================================================================================
// break statement
/*
Definition: Exits the loop immediately, even if the condition is still true.

Syntax:
break;
break label;  // with labels (advanced usage)
*/
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log("Number:", i);
}
// Output: 0 1 2 3 4

//==================================================================================================
// nested loops
/*
Definition: A loop inside another loop.
The inner loop runs completely for each iteration of the outer loop.
*/
for (let i = 1; i <= 3; i++) {
    console.log("Outer loop iteration:", i);
    for (let j = 1; j <= 2; j++) {
        console.log("  Inner loop iteration:", j);
    }
}
// Output:
// Outer: 1 → Inner: 1,2
// Outer: 2 → Inner: 1,2
// Outer: 3 → Inner: 1,2

//==================================================================================================
// labels in loops
/*
Definition: A label is an identifier that lets you name a loop
and control it using break or continue.

Syntax:
labelName: 
    statement

break labelName;
continue labelName;
*/
outerLoop: // Label for the outer loop
for (let i = 0; i < 3; i++) {
    console.log("Outer loop iteration:", i);
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            continue outerLoop; // Skip to next outer iteration
        }
        console.log("  Inner loop iteration:", j);
    }
}
// Output:
// Outer loop iteration: 0
//   Inner loop iteration: 0
// Outer loop iteration: 1
//   Inner loop iteration: 0
// Outer loop iteration: 2
//   Inner loop iteration: 0
