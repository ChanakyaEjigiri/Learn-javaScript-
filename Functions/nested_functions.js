//Nested functions
/*nested functions are functions defined inside other functions. The inner function is only accessible from within the outer function.*/

function outerFunction() {
    function innerFunction() {
        console.log("Hello from the inner function!");
    }
    innerFunction(); // Call the inner function
}
outerFunction(); // Call the outer function

//Output: Hello from the inner function!

//In this example, innerFunction is defined within outerFunction and can only be called from within outerFunction. When outerFunction is called, it in turn calls innerFunction, which logs a message to the console.

//Nested functions can be useful for encapsulating functionality and creating closures.
//They can also help in organizing code and avoiding polluting the global namespace.

//Example of closure with nested functions
function makeCounter() {
    let count = 0; // Private variable
    return function() {
        count++;
        return count;
    }
}
const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

//here, the makeCounter() function returns an inner function that has access to the count variable, even after makeCounter() has finished executing. This is a common pattern for creating private variables in JavaScript.
//Nested functions can also access parameters of the outer function
function outerFunctionWithParam(param) {
    function innerFunction() {
        console.log("Parameter from outer function: " + param);
    }
    innerFunction();
}
outerFunctionWithParam("Hello!"); // Output: Parameter from outer function: Hello!

//In this example, innerFunction can access the param parameter of outerFunctionWithParam, demonstrating how nested functions can utilize variables from their enclosing scope.
//This is a powerful feature of JavaScript that allows for more modular and maintainable code.
//==================================================================================================

//Key points about nested functions:
/*1. 1. Scope access (lexical scoping)
    An inner function can access variables of its outer function.
    The outer function cannot access variables of the inner function.
*/
function outer() {
    let x = 10
    function inner() {
        console.log(x) // can use outer variable
    }
    inner()
}
outer()
//output: 10


//2. Encapsulation: Inner functions can be used to encapsulate functionality and avoid polluting the global scope.
//3. Closures: Inner functions can form closures, allowing them to retain access to their outer function's scope even after the outer function has executed.
//4. Accessibility: Inner functions are only accessible from within their outer function, making them private to that function.
//5. Use Cases: Nested functions are useful for creating helper functions, managing state, and implementing design patterns like the module pattern.

//==================================================================================================
