//SECTION A: forEach()
//Question 1 
const numbers = [2, 4, 6, 8, 10];
numbers.forEach((Number) => { // forEach() loops through each name in the array
    console.log(Number * 2); 
});


//Question 2
const names = ["Esther", "John", "Ada", "Mike"];
names.forEach((names) => {
    console.log(`Hello ${names}!`); // Backtick syntax(Template Literals) lets us embed variables into the string using ${}
});

//SECTION B: map()
//Question 3
{
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((numbers) => numbers * numbers); // map() creates a new array by applying the callback function to each element
console.log(squaredNumbers);
}
//Question 4
const prices = [100, 200, 300];
const discountedPrices = prices.map((price) => price * 0.9); //10% of 100 = 10, so 100 - 10 = 90, Instead of price - (price * 0.10) we simply use price * 0.9
console.log(discountedPrices);
//SECTION C:filter()
//Question 5
{
const numbers = [5, 12, 8, 20, 3];
const result = numbers.filter((number) => number > 10); // filter() loops through each element and returns a new array
console.log(result);
}
// Question 6
const ages = [15, 22, 17, 30, 18];
const result = ages.filter((age) => age >= 18);
console.log(result);

// Bonus Question
// Question 7
{
const numbers = [10, 15,20, 25, 30];
const filteredNumbers = numbers.filter((number) => number > 20); // filter()keeps only numbers greater than 20
const doubleNumbers = filteredNumbers.map((number) => number * 2);// map()doubles each number in the filtered array 
console.log(doubleNumbers);
}