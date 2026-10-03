const { fork } = require('child_process')

const child = fork('factorialForkChild.js')

child.send(5)

child.on('message', (data) => {
    console.log(data);

})


