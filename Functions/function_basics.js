//FUNCTIONS in JAVASCRIPT

/*Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.*/


//function declaration

/*A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
    The name of the function.
    A list of parameters to the function, enclosed in parentheses and separated by commas.
    The JavaScript statements that define the function, enclosed in curly braces - { }. */

function greet(name) {
    return "Hello, " + name + "!";
}

//here greet is the name of the function 
//name is the parameter
//The statements inside the curly braces define what the function does.

//=========================================================================================================

//function invocation

/*Function invocation is the process of calling or executing a function that has been defined. When a function is invoked, the code inside the function body is executed, and any parameters passed to the function are used within that code.*/
greet("Alice"); // Invokes the greet function with "Alice" as an argument

//=========================================================================================================

//function expression

/*A function expression is similar to a function declaration, but instead of being named, it can be anonymous. Function expressions are not hoisted, meaning they cannot be called before they are defined.

A function expression is very similar to, and has almost the same syntax as, a function declaration. The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.*/

//example of function expression
const square = function(number) {
    return number * number;
};

//here square is a variable that holds the function expression
//number is the parameter
//The statements inside the curly braces define what the function does.
//------------------------------------------------------------------------------------------
//function expression hoisting
/* During hoisting phase:
    JavaScript sees const mult = ... → it reserves the variable name mult,
    BUT it does not assign the function yet, and const variables are in a temporal dead zone (TDZ) until their definition is reached.
*/
console.log(mult(2, 3)); 

const mult = function(a, b) {
    return a * b;
}
// This will throw a ReferenceError because mult is not defined yet

//=========================================================================================================

//Parameters
/*Parameters are the names listed in the function definition. They act as placeholders for the values that will be passed to the function when it is called. When a function is invoked, the arguments (actual values) are assigned to the corresponding parameters in the function definition.*/

//There are two special kinds of parameter syntax: default parameters and rest parameters.

//Default parameters

/*Default parameters allow you to initialize named parameters with default values if no value or undefined is passed. This feature helps avoid errors and makes functions more flexible.*/
function multiply(a, b = 1) { // b has a default value of 1
    return a * b;
}
console.log(multiply(5)); // Outputs: 5, since b defaults to 1
console.log(multiply(5, 2)); // Outputs: 10, since b is provided as 2
console.log(multiply(5, undefined)); // Outputs: 5, since b defaults to 1 when undefined is passed

//Rest parameters

/*Rest parameters allow you to represent an indefinite number of arguments as an array. This is useful when you want to create functions that can accept a variable number of arguments.*/

function sum(...numbers) { // numbers is a rest parameter
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // Outputs: 6
console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15
console.log(sum()); // Outputs: 0, since no arguments are passed

//========================================================================================================

//Return statement

/*The return statement is used to specify the value that a function should return when it is called. When a return statement is executed, the function stops executing and returns the specified value to the caller. If no return statement is provided, the function returns undefined by default.*/

function add(a, b) {
    return a + b; // Returns the sum of a and b
}
console.log(add(2, 3)); // Outputs: 5

//If no return statement is present
function noReturn() {
    console.log("This function does not return a value.");
}
console.log(noReturn()); // Outputs: undefined

//========================================================================================================

