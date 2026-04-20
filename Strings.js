//length of a string
let stringText = "This is a class on string methods"
console.log(stringText.length)


//toUpperCase and toLowerCase
let capitalLetter = stringText.toUpperCase()
let smallLetter = stringText.toLowerCase()
console.log(capitalLetter)
console.log(smallLetter)

//trim , trimStart and trimEnd
let str = "   Hello, World!   "
let trimmedStr = str.trim()
let frontTrimmedStr = str.trimStart()
let endTrimmedStr = str.trimEnd() //camel casing  
let end_trimmed_str = str.trimEnd() // snake casing
console.log(trimmedStr)
console.log(frontTrimmedStr)
console.log(endTrimmedStr)
console.log(end_trimmed_str)

let signupName = " Tejiri "
let signinName = "Tejiri"

if((signupName.trim()) === signinName){
    console.log("Welcome back, Tejiri!")
}else {
    console.log("Invalid login information")
}

//indexOf and includes
let user_email = "tejirienaibe99@techcrush@gmail.com"
let email_index = user_email.indexOf("@") // return datatype : number
console.log(email_index)

let email_contains_at = user_email.includes("@") // return datatype : boolean
console.log(email_contains_at)


//startsWith and endsWith
let userName = "techCrush Tejiri 6"
let starts = userName.startsWith("techCrush") // return datatype : boolean
console.log(starts)

let ends = userName.endsWith("6") // return datatype : boolean
console.log(ends)

//slice and substring
let testString = "my name is Tejiri! "
let slicedString = testString.slice(0, 10)
let substringString = testString.substring(0, 10)
console.log(slicedString)
console.log(substringString)

//replace and replaceAll
let text = "Tejiri is a techie. Tejiri loves coding and Tejiri loves teaching"
let replacedText = text.replace("Tejiri", "He") 
let replacedAllText = text.replaceAll("Tejiri", "He")
console.log(replacedText)
console.log(replacedAllText)

//split
const sentence = "LANGUAGES: JavaScript, Python, Java, C++"
let splitSentence = sentence.split(" ") // return datatype : array
console.log(splitSentence)
let example = "he is a boy , he is a student, he is reading"
console.log(example.split("he"))