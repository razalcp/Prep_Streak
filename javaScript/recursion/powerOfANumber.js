// Write a recursive function to calculate base raised to the power exponent.
// Example
// power(2, 4); // 16
// power(3, 3); // 27
// power(5, 0); // 1

function power(num, exp) {
    if (exp <= 0) return 1

    return num * power(num, exp - 1)
}
console.log(power(2, 4));

console.log(power(3, 3));

console.log(power(2, 0));


