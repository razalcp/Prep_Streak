//sum of all natural numbers from 1 to N

function addNaturalNumbers(n) {
    if (n <= 1) return 1
    return n + addNaturalNumbers(n - 1)
};

console.log(addNaturalNumbers(5));
