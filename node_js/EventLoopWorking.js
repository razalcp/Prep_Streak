//Create a script mixing 
// setTimeout , 
// setImmediate ,
// Promise.resolve , and 
// process.nextTick to predict and verify the output order

// console.log('Start');

// setTimeout(() => {
//     console.log('Set Timeout Worked');

// })
// setImmediate(() => {
//     console.log('Set Immediate Worked');

// });
// process.nextTick(() => {
//     console.log('Next Tick1 Worked');
//     process.nextTick(()=>{
//         console.log("nextTick2 Worked");
        
//     })

// });

// function FindSum(num1, num2) {
//     return new Promise((resolve, reject) => {
//         try {
//             const sum = num1 + num2
//             resolve(sum)
//         } catch (error) {
//             reject("Something went wrong")
//         }

//     })
// }

// FindSum(10, 2)
//     .then(res => console.log('The sum is = ', res)
//     ).catch(err => console.log(err)
//     )

// console.log('End');

//Desired Output
//Start
//End
//Next Tick Worked
//The Sum is = 12
//Set Immediate Worked
//Set Timeout Worked


///////Another Script///////


const fs = require("node:fs");

fs.readFile(__filename, () => {
  console.log("1. I/O callback");

  setTimeout(() => {
    console.log("2. setTimeout");
  }, 0);

  setImmediate(() => {
    console.log("3. setImmediate");
  });

  process.nextTick(() => {
    console.log("4. nextTick");
  });

  Promise.resolve().then(() => {
    console.log("5. Promise");
  });
});

//Output
// 1. I/O callback
// 4. nextTick
// 5. Promise
// 3. setImmediate
// 2. setTimeout