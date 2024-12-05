const accountId = 12345
let accountEmail = "abc@gmail.com"
var accountPassword = 857589
accountName = "shivam"
let accountState;


// accounId = 67890 // not allowed

accountEmail = "ccc@gmail.com"

accountName = "newshivam"

// console.log(accountName); // old method

/* do not prefer to use var
because of its block scope and functional scope
*/

// new table way
console.table([accountId, accountEmail, accountName, accountPassword, accountState])
