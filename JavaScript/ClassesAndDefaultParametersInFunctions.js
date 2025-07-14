//
// class Human{
//     //properties(state)
//     age = 13;       //public by default.
//     #weight = 40;   //"#" makes a member private.
//     //In order to get values of private members outside their class we've to use getter and setter methods.
//     height = 140;

//     constructor(newAge, newHeight){
//         this.age = newAge;
//         this.height = newHeight;
//     }

//     //behaviour(functionality)
//     walking(){
//         console.log("I am walking", this.#weight);  //By using "this"/Current Working Object functionality we can access the value of private members even outside class.
//     }

//     running(){
//         console.log("I am running");
//     }

//     get fetchWeight(){
//         return this.#weight;
//     }
//     //Both these methods provide semantic clarity, helps in Encapsulation and provide security.
//     set modifyWeight(val){
//         this.#weight = val;
//     }

// }

// let obj = new Human(50, 180);
// console.log(obj.age);
// console.log(obj.height);
// console.log(obj.fetchWeight);   //Since weight is a private member, it can't be set through a constructor so we use the getter(get) method to get it's value.

// // console.log(obj.#weight);    //gives error since weight is set private and cannot be accessed outside class directly.

// obj.walking();




//Default parameters in functions.

function sayName(myName = "Vritant Joshi"){
    console.log(`My name is: ${myName} `);
}

sayName();
sayName("Daksh Bhatt");