/*//Q1 Write a function to find the square of a number.

function square(n){
    return n*n
}
let num=4
console.log(square(num))
//output:16

//Q2 Write a function that returns the maximum of two numbers.

function getMax(num1,num2){
    return num1>num2?num1:num2
}
let num1=5,num2=7
console.log(getMax(num1,num2))
//output:7

//Q3 Write a function that returns the factorial of a number.
function factorial(num){
    let fact=1;
    while(num>0){
        fact=fact*num
        num--
    }
    return fact
}
num=5
console.log(factorial(num))
//output:120

//Q4 Write a function to reverse a string.
function reverseString(str){
    let reverse=""
    for(let i=str.length-1;i>=0;i--){
        reverse=reverse+str[i]
    }
    return reverse
}
let str="javaScript"
console.log(reverseString(str))
//output:tpircSavaj

//Q5 count the vowels in a given string

function countVowels(str){
    let vowels="aeiouAEIOU"
    let count=0
    for(let ch of str){
        if(vowels.includes(ch)){
            count++
        }
    }
   return count++
}
console.log(countVowels(str))
//output:3
*/
//Q6 Write a function that accepts a year and checks if it’s a leap year.
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}
let year=2025
console.log(isLeapYear(year))
//output: false