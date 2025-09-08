



// primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId );

const bigNumber = 34564528375389n



//Reference (Non-primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age:22,

}

const myFunction = function(){
    console.log("Hello World");
}

console.log(heros);
console.log(typeof bigNumber );

console.log(typeof myFunction );

console.log(typeof heros );

console.log(typeof myObj );

// non_premitive => function object / object

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

                            //Stack & Heap memory in js//
                         //  _____________________________//

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//                            

// Stack(primitive), Heap(non-primitive)

let myYoutubechanel = "subhambose" 

let newName = "SUBHAMBOSE"

console.log(newName);

console.log(myYoutubechanel);

let userOne ={
    email: "subham2005@gmail.com",
    age :21,
}

let userTwo = userOne

console.log(userOne);

console.log(userTwo);

userTwo.email = "subhambose2004@gmail.com"

console.log(userTwo.email);

console.log(userOne.email);

console.log(userOne);

console.log(userTwo);