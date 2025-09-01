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


//COMPARISON OPERATORS in JAVASCRIPT