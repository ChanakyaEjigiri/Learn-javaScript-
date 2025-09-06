//CONDITIONAL STATEMENTS
/*
Conditional statements are used to perform different actions based on different conditions. They allow you to control the flow of your program by executing certain blocks of code only when specific conditions are met.
Here are some common conditional statements in JavaScript:
1. if statement:
2. if...else statement:
3. else if statement:
4. switch statement:
5. Ternary operator (conditional operator):
*/


//1. if statement:
//The if statement evaluates a condition and executes a block of code if the condition is true. If the condition is false, the code block is skipped.
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
// Output: You are an adult.



//2. if...else statement:
/*The if...else statement evaluates a condition and executes one block of code if the condition is true and another block of code if the condition is false.*/
let time = 10;
if (time < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}
// Output: Good morning!



//3. else if statement:
/*The else if statement allows you to check multiple conditions in sequence. If the first condition is false, it checks the next condition, and so on, until one of the conditions is true or all conditions are checked. if all the conditions are false, then else block will be executed*/
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
// Output: Grade: B



//4. switch statement:
/*The switch statement evaluates an expression and executes the corresponding case block based on the value of the expression. It is often used when you have multiple possible values for a single variable.*/
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Invalid day";
}
// Output: Wednesday



//5. Ternary operator (conditional operator):
/*The ternary operator is a shorthand way of writing an if...else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.*/
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log("Discount:", discount);
// Output: Discount: 0.1


/*
These conditional statements help you make decisions in your code and execute different blocks of code based on specific conditions.

Key Points:
- if, else if, and else control flow based on conditions.
- switch is better when checking multiple exact matches.
- ternary operator is shorthand for simple if...else.
- Always include break in switch cases to avoid "fall-through".
*/

