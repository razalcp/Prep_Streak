function* evenGenerator(n) {
    for (let i = n; i > 0; i--) {
        if (i % 2 === 0) {
            yield i
        }
    }
}


function printWithDelay(gen, delay) {
    let timer = setInterval(() => {
        let next = gen.next();
        if (next.done) {
            clearInterval(timer)
            return
        }
        if (!next.done) {
            console.log(next.value)
        }
    }, delay)

}

let gen = evenGenerator(10)
printWithDelay(gen, 1000)

