//OPERATORS IN JAVASCRIPT
/*Operators are special symbols that perform operations on operands (values and variables).
For example, in the expression 5 + 2, the + operator adds the two numbers together.
JavaScript supports various types of operators, including:
1. Arithmetic Operators: +, -, *, /, %, ++, --
2. Assignment Operators: =, +=, -=, *=, /=, %=
3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
4. Logical Operators: &&, ||, !
5. Bitwise Operators: &, |, ^, ~, <<, >>, >>>
6. String Operators: + (concatenation), += (concatenation assignment)
7. Conditional (Ternary) Operator: condition ? expr1 : expr2
8. Type Operators: typeof, instanceof
9. Comma Operator: ,
*/



//ARITHMETIC OPERATORS in JAVASCRIPT
/*These operators are used to perform mathematical operations on numbers.
1. Addition (+): Adds two numbers together.
2. Subtraction (-): Subtracts one number from another.
3. Multiplication (*): Multiplies two numbers.
4. Division (/): Divides one number by another.
5. Modulus (%): Returns the remainder of a division operation.
6. Exponentiation (**): Raises a number to the power of another number. This was added in ES7 (ECMAScript 2016).
7. Increment (++): Increases a number by 1.
8. Decrement (--): Decreases a number by 1.
*/
let a=10
let b=3
console.log("a + b =", a + b) //Outputs: 13
console.log("a - b =", a - b) //Outputs: 7
console.log("a * b =", a * b) //Outputs: 30 
console.log("a / b =", a / b) //Outputs: 3.3333333333333335
console.log("a % b =", a % b) //Outputs: 1
console.log("a**b =", a ** b) //Outputs: 1000 (Exponentiation - a raised to the power of b)

console.log("a++ =", a++)     //Outputs: 10 (returns the value before incrementing - post-increment)
console.log("after incrementing a =", a) //Outputs: 11
console.log("b-- =", b--) //Outputs: 3 (returns the value before decrementing - post-decrement)
console.log("after decrementing b =", b) //Outputs: 2

console.log("--a =", --a) //Outputs: 10 (decrements a first, then returns the value - pre-decrement)
console.log("++b =", ++b) //Outputs: 3 (increments b first, then returns the value - pre-increment) 

//ASSIGNMENT OPERATORS in JAVASCRIPT
/*These operators are used to assign values to variables.
1. Assignment (=): Assigns a value to a variable.
2. Addition Assignment (+=): Adds a value to a variable and assigns the result to that variable.
3. Subtraction Assignment (-=): Subtracts a value from a variable and assigns the result to that variable.
4. Multiplication Assignment (*=): Multiplies a variable by a value and assigns the result to that variable.
5. Division Assignment (/=): Divides a variable by a value and assigns the result to that variable.
6. Modulus Assignment (%=): Takes the modulus of a variable by a value and assigns the result to that variable.
7. Exponentiation Assignment (**=): Raises a variable to the power of a value and assigns the result to that variable. This was added in ES7 (ECMAScript 2016).
*/
let x=5
console.log("x =", x) //Outputs: 5
x+=3  //Equivalent to x = x + 3
console.log("x after x+=3 :", x) //Outputs: 8
x-=2  //Equivalent to x = x - 2
console.log("x after x-=2 :", x) //Outputs: 6
x*=4  //Equivalent to x = x * 4
console.log("x after x*=4 :", x) //Outputs: 24
x/=6  //Equivalent to x = x / 6
console.log("x after x/=6 :", x) //Outputs: 4
x%=3  //Equivalent to x = x % 3
console.log("x after x%=3 :", x) //Outputs: 1
x**=4  //Equivalent to x = x ** 4
console.log("x after x**=4 :", x) //Outputs: 1 (1 raised to any power is 1)


// COMPARISON OPERATORS in JAVASCRIPT
/* 
These operators are used to compare two values and return a boolean result (true or false).

1. Equal (==): Checks if two values are equal, performs type coercion if types are different.
2. Strict Equal (===): Checks if two values are equal and of the same type (no type coercion).
3. Not Equal (!=): Checks if two values are not equal, performs type coercion if types are different.
4. Strict Not Equal (!==): Checks if two values are not equal or not of the same type (no type coercion).
5. Greater Than (>): Checks if the left value is greater than the right value (type coercion may occur if types differ).
6. Less Than (<): Checks if the left value is less than the right value (type coercion may occur if types differ).
7. Greater Than or Equal To (>=): Checks if the left value is greater than or equal to the right value (type coercion may occur if types differ).
8. Less Than or Equal To (<=): Checks if the left value is less than or equal to the right value (type coercion may occur if types differ).
9. ternary operator (condition ? expr1 : expr2): Evaluates a condition and returns expr1 if true, otherwise returns expr2.
*/

let p = 10;
let q = '10';

console.log("p == q :", p == q);   // true  (string '10' converted to number 10)
console.log("p === q :", p === q); // false (different types, no coercion)
console.log("p != q :", p != q);   // false (type coercion, values are equal)
console.log("p !== q :", p !== q); // true  (different types, no coercion)

console.log("p > 5 :", p > 5);     // true
console.log("p < 15 :", p < 15);   // true
console.log("p >= 10 :", p >= 10); // true
console.log("p <= 9 :", p <= 9);   // false
console.log("p <= 10 :", p <= 10); // true

// Comparisons with type coercion
console.log("p > q :", p > q);     // false ('10' converted to number 10)
console.log("p < q :", p < q);     // false ('10' converted to number 10)
console.log("p >= q :", p >= q);   // true  ('10' converted to number 10)
console.log("p <= q :", p <= q);   // true  ('10' converted to number 10)

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log("Can vote:", canVote); // Outputs: Yes, can vote

/*to compare NaN with any value including itself, use isNaN() function.
NaN is not equal to anything, including NaN itself.
*/
let nanValue = NaN;
console.log("nanValue == NaN :", nanValue == NaN);   // false
console.log("nanValue === NaN :", nanValue === NaN); // false
console.log("isNaN(nanValue) :", isNaN(nanValue));   // true



// LOGICAL OPERATORS in JAVASCRIPT
/*These operators are used to combine multiple boolean expressions and return a boolean result.
1. Logical AND (&&): Returns true if both operands are true; otherwise, returns false.
2. Logical OR (||): Returns true if at least one operand is true; otherwise, returns false.
3. Logical NOT (!): Returns true if the operand is false; otherwise, returns false (inverts the boolean value).
*/
let isPresent=true
let hasID=false
console.log("isPresent && hasID :", isPresent && hasID); // false (both need to be true)
console.log("isPresent || hasID :", isPresent || hasID); // true (at least one is true)
console.log("!isPresent :", !isPresent); // false (inverts the value)
console.log("!hasID :", !hasID); // true (inverts the value)
console.log("!(isPresent && hasID) :", !(isPresent && hasID)); // true (inverts the result of AND operation)
console.log("!(isPresent || hasID) :", !(isPresent || hasID)); // false (inverts the result of OR operation)