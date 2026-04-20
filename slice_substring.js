// Task 1: Substring & Slice
const str = "Nigeria is Awesome"
//Extract "Nigeria" using Substring 
const Nigeria = str.substring(0,7);
console.log(Nigeria);
//Extract "Awesome" using slice 
const Awesome = str.slice(11);
console.log(Awesome);
//Extract "Is" using slice
const is = str.slice(8,10);
console.log(is);


//Task 2: Split
const names = "John, Jane, Doe"
// Split into array  
const namesArray = names.split(",");
console.log(namesArray); // ["John", "Jane", "Doe"]
// Join with space 
const joined = namesArray.join(" ");
console.log(joined); // "John Jane Doe"
// Split by "/"
const path = "/user/home/docs";
const pathArray = path.split("/");
console.log(pathArray);  // ["", "user", "home", "docs"]
// Get home
const home = pathArray[2];
console.log(home); // ["home"]

//Task 3: Mix
const email = "user@example.com"
// Get Username using split()
const username = email.split("@"[0]);
console.log(username);
// Check if it is a .com Domain using endsWith()
const isDotCom = email.endsWith(".com");
console.log(isDotCom);
// Replace "@" with "AT" using replace()
const sanitised = email.replace("@", "AT");
console.log(sanitised);