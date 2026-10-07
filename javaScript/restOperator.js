function Sum(...numbers) {
    //rest operator syntax is three dots(...) followed by array name
    // console.log(numbers);
    return numbers.reduce((acc, curr) => {
        return acc = acc + curr
    }, 0)

}

console.log('The sum is = ', Sum(1, 2, 3, 4, 5, 6));
