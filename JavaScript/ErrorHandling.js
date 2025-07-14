// Any disruption due to which the normal flow of execution of code is disturbed is known as Error. 

//Types of errors:- 1. Compile time(caught during paring of code(before running))  &   2. Run time(caught while running the program)

// Synatax error(Compile time)
// console.log(1;

//Reference error(Run time)
// console.log(x);


//Creating custom error.

try{
    //Reference Error
    console.log(x);
}catch(err){
    throw new Error("Declare the variable first");
}