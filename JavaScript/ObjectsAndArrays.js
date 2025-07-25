// let obj = {
//     name: "Vritant",
//     'full name': "Vritant Joshi",
//     age: 25,
//     weight: 66,
//     greet: function(){
//         console.log("Hello world");
//     }
// };

// console.log(obj);
// obj.greet();

// console.log(typeof(obj));

// let obj2 = obj; //shallow copy : no new data/object created both reference variables point to the same reference.


// -----------------------ARRAYS----------------------- //

let arr = [1,2,3,4,5];
console.log(arr);

let brr = new Array(1, "Vritant", true);
// console.log(brr);

// console.log(typeof(arr));
// console.log(typeof(brr));

// console.log(typeof(arr)==typeof(brr));  //true
// console.log(typeof(arr)===typeof(brr)); //true

// console.log(brr[1]);


// // ---------------ARRAY METHODS---------------- //

// brr.push("Joshi");      //inserts element at end of array.
// brr.pop();              //removes the last/rightmost element of the array.



// brr.shift();            //removes the first/leftmost element of the array.
// brr.unshift(1);         //inserts element at first/leftmost position of the array.

// brr.push("Joshi");
// brr.push(2);
// brr.push(3);
// brr.push(4);
// brr.push(5);

// console.log(brr.slice(2,4));    //creates a shallow copy of the array from the given starting index value and excluding the given ending index value of the array.

// console.log(brr.splice(2,0,"Joshi"));         //used to insert, remove or replace from any index of the array. 


// console.log(brr);

// let ans = arr.map((number) =>{      //used to apply any given function logic to all elements of the array.
//     return number*number;
// })
// console.log(ans);

// let ans = arr.map((number) =>{      //used to apply any given function logic to all elements of the array.
//     return number+1;
// })
// console.log(ans);


// let evenArray = arr.filter((number)=>{      //used to filter elements of the array based on the condition of the given function.
//     // if(number%2==0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
//     return number%2==0;
// })

// console.log(evenArray);

// let stringArray = brr.filter((value) =>{
//     // if(typeof(value) === 'string'){  //both work
//     if(typeof(value) == 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(stringArray);


// let ans1 = arr.reduce((acc,curr)=>{                
//     return acc + curr;
// },0);   //accumulator(acc) initialized as 0 so current(curr) will be arr[0] at start. 


// console.log(ans1);


// let arr1 =  [9,12,1,4,8];
// arr1.sort();
// console.log(arr1);

// console.log(arr.indexOf(8));

let arr2 = [10,20,30];

arr2.forEach((value, index)=>{
    console.log(`Number ${value} index ${index}`);
})