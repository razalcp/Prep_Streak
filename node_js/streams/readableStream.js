const fs = require('fs')

const readableStream = fs.createReadStream('file2.txt', {
    highWaterMark: 2
})
const writableStream = fs.createWriteStream('output.txt', {
    highWaterMark: 2
})

// readableStream.on('data', (chunk) => {
//     try {
//         // console.log(chunk.toString());
//         writableStream.write(chunk)

//     } catch (error) {
//         console.log(error.message);

//     }

// })

readableStream.pipe(writableStream)