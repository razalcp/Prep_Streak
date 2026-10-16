function recursiveFactorial(n) {
    if (n <= 0) {
        return 1
    }
    return n * recursiveFactorial(n - 1)
}
let num = 1
console.log(`Factorial of ${num} = ${recursiveFactorial(num)}`);
