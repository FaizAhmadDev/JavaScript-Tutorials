const id = 122
let email = "faiz@example.com"
var password = "abc12"
accountCity = "here"
let accountState; // Undefined if not initialized

/*
    prefer not to use var
    because of issue in block/functional scope
*/

// id = 100 // const variables cannot be changed
email = "fa@fa.com"
password = "121212"
accountCity = "not here"

console.log(id)

console.table([id, email, password, accountCity, accountState])
