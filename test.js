let str = "Coding is fun"
// Extract the word "coding"
let word = str.slice(0,6)
console.log(word)
let fun = str.substring(10,13)
console.log(fun)
console.log(str.slice(7,9))

//challenge 2
const colors = "red, green, blue, yellow"
const comma = colors.split(",")
console.log(comma)
const joined = comma.join(" - ")
console.log(joined)

console.log("Enaibe Oghenetejiri Olorunyomi".split(' ').join("-"))

const url = "api/v1/users";
const slash = url.split("/")
const v1Index = slash[2]
console.log(slash)
console.log(v1Index)

const matricNumber = "TECHCRUSH-TEJIRI-2026"
const splitMatric = matricNumber.split("-")
console.log(splitMatric[1])


