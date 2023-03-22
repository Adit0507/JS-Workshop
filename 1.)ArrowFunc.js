// Function Declarations
// function square(num){
//     return num*num;
// }

// console.log(square(2))

// Function expression
// const powerThree = function (num){
//     return num*num*num;
// } 

// console.log(powerThree(3))


// First Class Functions
// function square(num){
//     return num*num;
// }

// function displaySquare(fn){
//     console.log("Square is "+ fn(4))
// }

// console.log(displaySquare(square))


// IIFE (Immediately Invoked Function Expression)

// (function square(num){
//     return console.log(num*num);
// })(5)


// Question
// (function (x) {
//     return (function (y){
//         console.log(x)
//     })(2) 
// })(1)


// Hoisting
// function workshop(){
//     console.log("WorkShop")
// }


// Params & Arguments
// function square(num){
//     console.log(num*num);
// }

// square(5);  //Arguments

// Arrow Functions
// const add = (first, second) => {
//     console.log(first + second);
// }

// add(5, 6)


// Differences with Normal Functions
// 1.) Implict "return" keyword
// const square = (num) => console.log(num*num);


// 2.) Arguments
// function fn(){
//     console.log(arguments)
// }

// fn(3,4,5,6)

// const fnArr =() => {
//     console.log(arguments)
// }

// fnArr(2,4,6,7)

// 3.) Hoisting

// three(3)
// const three = (num) => console.log(num*num*num);

