let obj = {
    name : "Tejiri",
    age : 25,
    profession : "Developer",
}
let student = {
    name: "Yomi Akinseyimi",
    age: 21,
    department: "Computer Science",
    isEnrolled: true
};
console.log(student.name)
console.log(student["name"])


let employee = {
    name: "Benjamin Enaibe",
    role: "Frontend Developer",
    salary: 450000,
    city: "Lagos"
};

let newName = employee.name
let newRole = employee.role

const {name  , salary } = employee
console.log(name)
console.log(salary)


let courses = {
    CSC401 : "Data Structures",
    CSC402 : "Algorithms",
    CSC403 : "Operating Systems",
    CSC404 : "Database Systems"
}

let {CSC401 : CSC400} = courses
console.log(CSC400)




let person = {
    name: "Enajevwe",
    opay : true,
}
console.log(person)
let {opay: palmpay , name : myName} = person
console.log(palmpay)
console.log(myName)



let profile = { name: "Tejiri", age: 22 };

// Copy and add new properties
let updatedProfile = {
    ...profile,
    city: "Abuja"
};

console.log(updatedProfile);

// const { nombre, ...rest } = {
//     nombre: "Archer",
//     age: 25,
//     city: "Lagos"
// };

// console.log(nombre); // "Archer"
// console.log(rest);
// // { age: 25, city: "Lagos" }

const user = {
    name : "Tejiri",
    password : "12345",
    isFemale : true,
    city : "Lagos",
    age : 25
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

//for in
for (let key in user){
    console.log("these are the keys : " + key)
    console.log("these are the values : " + user[key])
   
}
