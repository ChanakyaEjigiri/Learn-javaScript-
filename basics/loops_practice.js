//Q1 write a program to print the marks of  student in an object using for loop

let marks={
    "chanakya":40,
    "anil":50,
    "charan":45
}
for(let i=0;i<3;i++){
    console.log("marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}
//output:
//marks of chanakya are 40
//marks of anil are 50
//marks of charan are 45

//Q2 using for in:
for(let key in marks){
    console.log("marks of "+key+" are "+marks[key])
}
//output:
//marks of chanakya are 40
//marks of anil are 50
//marks of charan are 45


//Q3 Print even numbers between 1 and 20.
for(let i=1;i<20;i++){
    if(i%2==0){
        console.log(i)
    }
}
//output:
//2
//4


//Q4 Print the multiplication table of 5.

for(let i=1;i<=10;i++){
    console.log(5+" * "+i+" = "+5*i)
}
//output:
//5 * 1 = 5
//5 * 2 = 10

//Q5 Write a loop that finds the GCD (Greatest Common Divisor) of two numbers.

let num1=10
let num2=20
while(num2!=0){
    let temp=num1
    num1=num2
    num2=temp%num2
}
console.log(num1)
//output:
//10

