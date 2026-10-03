process.on('message', (number) => {
    console.log("Child received:", number);
    let factorial = 1
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i
    }
    process.send(factorial)
})