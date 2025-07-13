// Variable Scoping is of 3 types:-
/* 
1. Global:- can access the variable anywhere in the entire file.
2. Function:- can access the variable only within the function it's declared/defined in.
3. Block:- can access the variable only within the same block.
*/

// var age = 15;   //Global scope, since it's not inside any function or block.
//let age = 15;      //let also works fine with global scope.
// const age = 15;      //const also works fine with global scope.

// console.log(age);

// {
//     console.log(age);
// }

// if(true){
//     console.log(age);
// }

// for(let i=0;i<2;i++){
//     console.log(age);
// }

// function sayHello(){
//     console.log(`Hi ${age}`);
// }
// sayHello();



// Function Scope.

// function sayHello(){
//     var fullName = "Earth";     //Since "var" is function scoped, we won't be able to access it's value outside the function.
//     //Same will be the case for "let" and "const".
//     console.log(`Hello ${fullName} `);
// }

// console.log(fullName);      //gives error

// sayHello();


// Block Scope.

// {
//     var height = 170;   //Since "var" isn't block scope, it's value is accessible even outside the block.
// }

// console.log(height);

// {
//     let age = 100;      //Same case for "const".
//     //Since "let" and "const" are block scope, their value isn't accessible outside the block.    
// }

// console.log(age);       //gives error.



// Temporal Dead Zone

//Whenever we try Variable Hoisting with "let" or "const" it will fail and the lines between which the value of the variable is not accessible is Called the Temporal Dead Zone.

console.log(marks);     //Here Line 65-68 is Temporal Dead Zone, since in between these lines we can't access the value of marks even though we know it's there.
console.log("Hello");
console.log("Hi");
let marks = 100;

console.log(marks);     //Normal Execution.
