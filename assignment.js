// MY ONLINE BOOKSTORE
// TASK 1: Create Variables 

let CustomerName = "Tejiri"
let CustomerAge = 26;
let BookTitle = "Manchester United"
let BookPrice = 5000;
let Quantity = 3;
let IsStudent = true;

// TASK 2: Use of Arithmetic Operators
totalPrice = BookPrice * Quantity;

//TASK 3: COMPARISON OPERATOR CHECKS
let isAdult = CustomerAge >= 18;
let buyingManyBooks = Quantity > 3;
let isBookFiveThousand = BookPrice === 5000;

//TASK 4: USE A NON-PRIMITIVE DATA TYPE

const CustomerOrder = {
    CustomerName: CustomerName,
    BookTitle: BookTitle,
    Quantity: Quantity,
    totalPrice: totalPrice,
};

//TASK 5: PRINT THE RESULTS
console.log("Customer Name:", CustomerName);
console.log("Book Title:", BookTitle);
console.log("Total Price:", totalPrice);
console.log("Is Customer an Adult:", isAdult);
console.log("Buying More Than 3 Books?:", buyingManyBooks);
console.log("Is Book Price 5000:", isBookFiveThousand);