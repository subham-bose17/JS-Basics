// let arrOne = ['Harsh','Sam',583,['Neel','98','Spyderman',['Batman','83_kolkata',2025]]]

// let arrTwo = [[5,8,9,11],['Marvel',['Thor','IronMan','Hulk']]]

// let arrThree = arrOne.concat(arrTwo)

// //console.log(arrThree);

// let wraped = [arrThree]

// console.log(wraped);


// let arrOne = ['Harsh','Sam',583,['Neel','98','Spyderman',['Batman','83_kolkata',2025]]]

// let arrTwo = [[5,8,9,11],['Marvel',['Thor','IronMan','Hulk']]]
// let arrThree = [...arrOne ,...arrTwo]
// console.log(arrThree.flat(2));

// let user = new Object(
//     {
//         userName : 'Subham',
//         userId : 1234,
//         age : 21

//     }
// )


// let mySym = Symbol("Wave")
// let user = {
//     userName: 'Subham',
//     userId: 1234,
//     age: 21,
//     [mySym] : "Hello"

// }
// console.log(user["userId"]);
// console.log(user.userId);

// console.log(user[mySym]);




let user = {
    userName: 'Subham',
    userId: 1234,
    age: 21,
    greet: function () {
           setTimeout(()=>{
                console.log(this.userName);
                
           },2000)
    }
}
// user.greet()
// console.log(this);






