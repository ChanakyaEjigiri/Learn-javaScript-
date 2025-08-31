//Q1. Concatenation of string and number
let str="123"
let num=123
str=str+num
console.log(str)  //Outputs: 123123

//Q2. use typeof to check the datatype of str
console.log(typeof(str)) //Output: string


//Q3. Create a const object. can you change to hold a number later?
const obj={name:"chanakya", age:22}
//obj=10  // This will cause an error: Uncaught TypeError: Assignment to constant variable.


//Q4. try to add a new property to the const object
obj.roll_num=532  //Works only if the key is a valid identifier(dont work if key is like 1name)
obj["college name"]="iare" //Works for any key with space or special characters
console.log(obj) //Outputs: {name: 'chanakya', age: 22, roll_num: 532, college name: 'iare'}


//Q5. write a code to create a word meaning dictionary of 5 words
const dictionary={
    "const":"Declares a block-scoped constant, which must be initialized at declaration and cannot be reassigned.",
    "var":"Declares a variable, optionally initializing it to a value.",
    "let":"Declares a block-scoped variable, optionally initializing it to a value.",
    "declaration":"A statement that declares a variable, function, or constant.",
    "initialization":"The process of assigning an initial value to a variable or constant at the time of its declaration."
}
console.log(dictionary)