// const user = {
//   name: "Rahul",
//   age: 28,
//   city: "Kochi",
//   role: "Developer"
// };

const { log } = require("node:console");

// for(let key in user){
//     console.log(`${key} : ${user[key]}`)
// }

// let values=Object.values(user)

// for(let value of values){
//     console.log(value)
// }

// const entries=Object.entries(user)
// console.log(entries)

// for(let [key,value] of entries){
//     console.log(key," : ",value)
// }

// Exercise 4 — Calculate total
// const prices = {
//   laptop: 50000,
//   mouse: 1000,
//   keyboard: 2500,
//   monitor: 15000
// };
// let sum=0
// for(let key in prices){
//     sum+=prices[key]
// }


// const values = Object.values(prices)

// for(let value of values){
//     sum+=value
// }

// console.log(sum)
// const total = values.reduce((acc,curr)=>{
//     return acc=acc+curr
// },0)

// console.log("subTotal = ",total)
// 

// Exercise 5 — Find the highest value
const salaries = {
    rahul: 45000,
    arun: 60000,
    ajay: 52000,
    rohit: 75000
};
// Find the person with the highest salary.
const salaryEntries = Object.entries(salaries)

// console.log(salaryEntries)
let max = -Infinity
let person = ''
let salary = ''
for (let [key, value] of salaryEntries) {
    if (value > max) {
        salary = value
        person = key
    }
}
console.log(person + ' has the highest salary ---->  ', salary);


// Exercise 6
// Find the sum:
// const numbers = [10, 20, 30, 40, 50];
// let sum = 0
// for (let num of numbers) {
//     sum += num
// }
// console.log("Sum = ", sum);


// Strings + for...of
// Strings are iterable too:
// const name = "Razal";

// for(let char of name){
//     console.log(char);

// }
// 


// Exercise 7
// Count the number of vowels:
// const text = "javascript is awesome";
// let count = 0
// for (let char of text) {
//     if ("aeiou".includes(char)) {
//         count++
//     }
// }
// console.log("Total Vowels Count : ", count)

//for...of + continue
//print odd numbers
// const numbers = [1, 2, 3, 4, 5, 6];

// for (let num of numbers) {
//     if (num % 2 === 0) continue
//     console.log(num);

// }

// Exercise 8
// Print only numbers greater than 50:
// const numbers = [20, 65, 30, 90, 45, 75, 10];

// for (let num of numbers) {
//     if(num>50)console.log(num);

// }



// Exercise 9
// Find the first number greater than 100:
// const numbers = [20, 45, 67, 120, 30, 200];

// for (let num of numbers) {
//     if (num > 100) {
//         console.log(num);
//         break;
//     }
// }

// Using 
// Array.prototype.forEach method
let array = [1, 2, 3, 4, 5, 6];

array.forEach((num, index) => {
    console.log(`${index} ---------> ${num}`);

})