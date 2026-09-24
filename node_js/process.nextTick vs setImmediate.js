console.log('A');

process.nextTick(() => {
    console.log("Next tick 1");

});
setImmediate(() => {
    console.log("Set Immediate1 callback runned");

});
setTimeout(() => {
    console.log("SetTimeout callback worked");
    process.nextTick(() => {
        console.log("Next Tick 3");

    })
    setImmediate(() => {
        console.log('Set Immediate2 callback worked');

    })
});

// setTimeout(() => {
//     console.log("SetTimeout callback worked");
// }, 1000);

process.nextTick(() => {
    console.log("Next tick 2");
});

console.log('B');


//output
// A
// B
// Next tick 1
// Next tick 2
// SetTimeout callback worked
//Next Tick 3
// Set Immediate1 callback runned
//Set Immediate2 callback worked



//output if settimeout delay is 1000
// A
// B
// Next tick 1
// Next tick 2
// Set Immediate callback runned
// SetTimeout callback worked
