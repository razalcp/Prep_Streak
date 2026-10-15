// `Higher order function is a function that does any one of these things-
// it either recives a function as an argument or it returns a function.
// Array.prototype.pap is an example for HOF`

// function greet(name) {
//   return `Hello, ${name}!`;
// }

// function processUser(callback) {
//   console.log(callback);
// }

// processUser(greet);

function multiplyBy(number) {
    return function (value) {
        return number * value
    }
}

const double = multiplyBy(2)
const thriple = multiplyBy(3)

console.log(double(5));
console.log(thriple(5));

