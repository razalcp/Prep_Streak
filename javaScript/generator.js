// function* evenGenerator(n) {
//     for (let i = n; i > 0; i--) {
//         if (i % 2 === 0) {
//             yield i
//         }
//     }
// }


// function printWithDelay(gen, delay) {
//     let timer = setInterval(() => {
//         let next = gen.next();
//         if (next.done) {
//             clearInterval(timer)
//             return
//         }
//         if (!next.done) {
//             console.log(next.value)
//         }
//     }, delay)

// }

// let gen = evenGenerator(10)
// printWithDelay(gen, 1000)


// function* numberGenerator() {
//     let num = 0;
//     while (num <= 5) {
//         yield num++
//     }
// }

// const gen = numberGenerator()
// console.log(gen.next().value);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


function* evenGenerator(num) {
    for (let i = num; i >= 2; i--) {
        if (i % 2 === 0) {
            yield i
        }
    }
}

function printWithDelay(gen, delay) {
    let timer = setInterval(() => {
        let next = gen.next()
        if (next.done) {
            clearInterval(timer)
            return
        }
        if (!next.done) {
            console.log(next.value);

        }
    }, delay)
};

printWithDelay(evenGenerator(15), 1000)



