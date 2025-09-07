// LOOPS IN JAVASCRIPT
/* 
loops are used to execute a block of code repeatedly until a specified condition is met.
There are different types of loops and loop controls in JavaScript:

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

//for LOOP
/*
definition: A for loop is used to repeat a block of code a specific number of times.
it is commonly used when the number of iterations is known beforehand.
syntax:
for (initialization; condition; increment/decrement) {
    // code to be executed
}
intialization: It is executed once before the loop starts. It is typically used to initialize a counter variable.

condition: It is evaluated before each iteration of the loop. If it evaluates to true, the loop body is executed. If it evaluates to false, the loop terminates.

increment/decrement: It is executed after each iteration of the loop. It is typically used to update the counter variable.
*/
for (let i = 0; i < 5; i++) {
    console.log("for loop iteration:", i);
}
// Output:
// for loop iteration: 0
// for loop iteration: 1
// for loop iteration: 2
// for loop iteration: 3
// for loop iteration: 4


//while LOOP
/*
definition: A while loop is used to repeat a block of code as long as a specified condition is true.
syntax:
while (condition) {
    // code to be executed
}
condition: It is evaluated before each iteration of the loop. If it evaluates to true, the loop body is executed. If it evaluates to false, the loop terminates.

Note: there must be a way to eventually make the condition false, otherwise the loop will run indefinitely.
*/
let j = 0;
while (j < 5) {
    console.log("while loop iteration:", j);
    j++; // incrementing j to eventually make the condition false
}
// Output:
// while loop iteration: 0
// while loop iteration: 1
// while loop iteration: 2
// while loop iteration: 3
// while loop iteration: 4


//do...while LOOP
/*
definition: The do...while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

syntax:
do {
    // code to be executed
} while (condition);
condition: An expression evaluated after each pass through the loop. If this condition evaluates to true, statement is re-executed. When condition evaluates to false, execution continues with the statement after the do...while loop.

*/
let i = 0;
do {
  i += 1;
  console.log("do...while loop iteration:", i);
} while (i < 5);
// Output:
// do...while loop iteration: 1
// do...while loop iteration: 2
// do...while loop iteration: 3
// do...while loop iteration: 4
// do...while loop iteration: 5


//for...in LOOP
/*
definition: The for...in statement iterates a specified variable over all enumerable properties of an object. For each distinct property, statements can be executed.
syntax:
for (variable in object) {
    // code to be executed
}
' in ' is a keyword that is used to specify the object whose properties are to be iterated over.
variable: On each iteration, a different property of the object is assigned to variable.
object: The object whose enumerable properties are iterated over.
*/
const marks = {"ram":45, "krish":32, "bharath":50}; 
for(let key in marks){
    console.log("Marks of "+key+": "+marks[key]);
}
// Output:
// Marks of ram: 45
// Marks of krish: 32
// Marks of bharath: 50

//for...of LOOP
/*
definition: The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
syntax:
for (variable of iterable) {
    // code to be executed
}
'of' is a keyword that is used to specify the iterable object to be looped over.
variable: On each iteration, a different value of the iterable is assigned to variable.
iterable: An object that has iterable properties, such as an Array, String, Map, Set, etc.
*/ 
const arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log("Array value:", value);
}
// Output:
// Array value: 10
// Array value: 20
// Array value: 30
// Array value: 40
// Array value: 50


//continue statement
/*
definition: The continue statement is used to skip the current iteration of a loop and move to the next iteration.
The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

syntax:
continue;
continue label;
*/
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log("Odd number:", i);
}
// Output:
// Odd number: 1
// Odd number: 3
// Odd number: 5
// Odd number: 7
// Odd number: 9


//break statement
/*
definition: The break statement is used to exit a loop or switch statement before it has completed all its iterations or cases.
The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.

syntax:
break;
break label;
*/
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log("Number:", i);
}
// Output:
// Number: 0
// Number: 1
// Number: 2
// Number: 3
// Number: 4


//labels in loops
/*
definition: A label provides a statement with an identifier that lets you refer to it elsewhere in your program. You can use labels with break or continue statements to control the flow of loops more precisely.

A labeled statement is any statement that is prefixed with an identifier. You can jump to this label using a break or continue statement nested within the labeled statement.

syntax:
labelName: 
    statement
break labelName;
continue labelName;
*/

outerLoop: // This is a label for the outer loop
for (let i = 0; i < 3; i++) {
    console.log("Outer loop iteration:", i);
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            continue outerLoop; // Skip to the next iteration of the outer loop when j is 1
        }
        console.log("  Inner loop iteration:", j);
    }
}
// Output:
// Outer loop iteration: 0
// Inner loop iteration: 0
// Outer loop iteration: 1
// Inner loop iteration: 0
// Outer loop iteration: 2
// Inner loop iteration: 0

// Note: When j is 1, the continue statement causes the program to skip the rest of the inner loop and proceed to the next iteration of the outer loop.