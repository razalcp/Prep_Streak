function arraySum(arr) {
    if (arr.length <= 0) return 0

    return arr.pop() + arraySum(arr)
    // return parseInt(arr.splice(0, 1)) + arraySum(arr)
}

console.log(arraySum([1, 2, 3, 4, 5]));


