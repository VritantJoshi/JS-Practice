// function saymyname() {
//     console.log("Vritant Joshi");
    
// }

// saymyname();

// function printCounting() {

//     for(let i=1;i<=20;i++){
//         console.log(i);        
//     }
    
// }

// printCounting();


// function printNum(n){
//     console.log(n);
    
// }

// printNum(5);


// function printNums(n1,n2){
//     console.log(n1,n2);
    
// }

// printNums(5,8);


// function average(n1,n2){
//     let avg = (n1+n2)/2;
//     console.log(avg);
// }

// average(5,3);


// function getSum(n1,n2,n3){
//     let sum = n1+n2+n3;
//     return sum;
// }

// let ans = getSum(22,44,22);
// console.log(ans);

// function getmyname(firstName, lastName){

//     //let fullName = firstName + " " + lastName;
//     let fullName = firstName + lastName;
//     return fullName;
//     // unreachable statements
//     // let a = 10;
//     // let b = 15;
//     // let sum = a+b;
//     // console.log(sum);
     
// }

// console.log(getmyname("Vritant", "Joshi"));
// let name = getmyname("Vritant", "Joshi");
// let name = getmyname(7, 7);
// console.log(name);


// function getMultiplication(a,b){
//     return a*b;
// }

// console.log(getMultiplication(2,10));

// let solve = function(a,b){
//     return a*b;
// }

// console.log(solve(2,20));

// function square(n){
//     // return n*n;
//     return n**2;
// }

// console.log(square(5));

// let square = function(n){
//     return n**2;
// }

// console.log(square(5));


//------------------ARROW FUNCTION-------------------//

// let exp = function (x,y){
//     return x**y;
// }

// console.log(exp(2,5));


let exp = (x,y) => {
    return x**y;
}

console.log(exp(2,5));
