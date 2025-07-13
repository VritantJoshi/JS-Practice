// Hoisting is the process which shifts the variable declaration or function declaration to the top of their scope.

// sayMyName( "Vritant");

// function sayMyName(finalName){  //Let's assume this function is part of an imaginary block, According to Function Hoisting even if a function call is given before is declaration, it is shifted to the top of it's scope at the time of compilation preventing the code to cause errors.
//     console.log(finalName);
    
// }


// sayHello();

// let sayHello = function() {     //If we use function expression to declare and define a function, Function Hoisting will not be possible and it will give reference error.
//     console.log("Hello world");
    
// }

console.log(age);
//  gives undefined. This is because in case of function hoisting the whole function(declaration + defination) shifts to the top of the scope leaving its logic intact, but in case of variable hoisting, when the variable declaration is moved to the top it's defination is left behind and the variable has no given value, so it gives undefined as output.
//  variable hoisting can only be done with var, this is because "var" can be redeclared and reassigned unlike "let" and "const". In case of "let and const" we will get reference error.

var age = 25;
console.log(age);   //25(Normal execution)


// Class Hoisting

// const o1 = new Human();

// class Human{    //Class Hoisting is also not possible since it will give reference error.

// }



// Why functions are called first class citizens in JS?

// Since functions can be used to many tasks in JS like:-
/**\
 * assign to a variable.
 * as argument.
 * return function
 * use function in DSA.
 * as property in object.
 */
// They are called first class citizrns in JS.

function greetMe(greetings, fullName){      //passing Function As Argument.
    console.log(`Hello ${fullName}`);
    greetings();
    
}


let greetings = function() {    //Assigning Function to a variable.
    console.log("Greetings");
}

greetings();
 
greetMe(greetings, "Vritant Joshi");




