const accountId = 144553
let accountEmail = "subham2005.work.@gmail.com"
var accountPassword = "200523"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountCity = "Mahesh"

accountEmail = "bosepuspa733@gmail.com"

accountPassword = "15102004"

let accountState;

// accountId = 123245 // not allowed  due to contant



console.log(accountId);

console.log(accountEmail);

console.log(accountPassword);

console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
