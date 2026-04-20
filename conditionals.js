//IF-ELSE STATEMENTS
let userAge = 16
if (userAge >= 18){
    console.log("Welcome to club 9ja")
}else{
    console.log("Sorry, you are not allowed to enter")
}


let gender = "Male"
if (gender === "Female"){
    console.log("Welcome to the Ladies section")
}else if (gender === "Male"){
    console.log("Welcome to the Male section")
}else if (gender === "Others"){
    console.log("Welcome to the others section")
}else {
    console.log("we don't know where you belong")
}


let username = "Tejiri"
let password = "password123"
if (username === "Tejiri" && password === "password123"){
    console.log("you have succesfully logged in")
}else if (username === "Tejiri" || password === "password123"){
    console.log("username or password incorrect")
}else{
    console.log("login failed")
}
    

let voterAge = 17
if (voterAge >= 18){
    console.log("Cast your vote")
}else{
    console.log("You are not qualified to vote")
}