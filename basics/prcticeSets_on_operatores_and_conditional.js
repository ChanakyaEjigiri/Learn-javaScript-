//Q1. use logical operators to find whether the age of a person is between 10 and 20
let age=18
if(age>10 && age<20){
    console.log("your age lies between between 10 and 20")
}
else{
    console.log("your age doesn't lies between between 10 and 20")
}

//Q2. implement switch case without break and with break.
age=10
switch(age){
    case(18):
        console.log("your age is 18")
    case(10):
        console.log("your age is 10")
    case(32):
        console.log("yor age is 32")
    default:
        console.log("your age is unknown")
}
/*Output:
your age is 10
yor age is 32
your age is unknown
*/

/*
In the above code, there is no break statement after each case. So, when the switch statement matches the case with age 10, it will execute the code for that case and then continue to execute the code for all subsequent cases (including case 32) until it reaches the end of the switch statement or encounters a break statement.
This is known as "fall-through" behavior in switch statements.
 */

let vehicle="car"
switch(vehicle){
    case("bike"):
        console.log("bike have 2 wheels")
        break;
    case("car"):
        console.log("car have 4 wheels")
        break;
    case("truck"):
        console.log("truck have 6 wheels")
        break;
    default:
        console.log("vehicle is unknown")
}
/*Output:
car have 4 wheels

In this case, when the switch statement matches the case with age 32, it will execute the code for that case and then encounter the break statement, which will exit the switch statement immediately. As a result, only the message "your age is 32" will be printed to the console.
*/

//Q3. write a program to find whether a number is divisible by 2 and 3.

let num=456
if(num%2==0 && num%3==0){
    console.log(num+" is divisible by both 2 and 3")
}
else{
    console.log(num+" is not divisible by 2 and 3")
}

//Q4. write a program to find whether a number is divisible by either 2 or 3
num=33
if(num%2==0 && num%3==0){
    console.log("your number is divisible by both 2 and 3")
}
else if(num%2==0){
    console.log("your number is divisible by 2")
}
else if(num%3==0){
    console.log("your number is divisible by 3")
}
else{
    console.log("your number is not divisible by 2 and 3")
}
//  Output: your number is divisible by 3

//Q5. write a program to find whether a person is eligible for voting or not.
age=17
if(age>=18){
    console.log("you are eligible for voting")
}
else{
    console.log("you are not eligible for voting")
}
// Output: you are not eligible for voting

