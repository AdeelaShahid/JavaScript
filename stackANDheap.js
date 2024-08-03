//heap
let userAdeela = {
    email:"adeela@abc.com",

}

let userAhmad = userAdeela
userAhmad.email = "ahmad@abc.com"

console.log(userAdeela.email);
console.log(userAhmad.email)


//stack
let name = "adeela"
let othername = name
othername = "ahmad"

console.log(name)
console.log(othername);
