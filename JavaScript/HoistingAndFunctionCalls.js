// Hoisting is the process which shifts the variable declaration or function declaration to the top of their scope.

sayMyName( "Vritant");

function sayMyName(finalName){  //Let's assume this function is part of an imaginary block, According to Function Hoisting even if a function call is given before is declaration, it is shifted to the top of it's scope at the time of compilation preventing the code to cause errors.
    console.log(finalName);
    
}

console.log(age);
//  gives undefined. This is because in case of function hoisting the whole function(declaration + defination) shifts to the top of the scope leaving its logic intact, but in case of variable hoisting, when the variable declaration is moved to the top it's defination is left behind and the variable has no given value, so it gives undefined as output.
//  variable hoisting can only be done with var, this is because "var" can be redeclared and reassigned unlike "let" and "const". In case of "let and const" we will get reference error.

var age = 25;
console.log(age);   //25(Normal execution)



// sayMyName("Vritant");