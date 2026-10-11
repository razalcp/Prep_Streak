const fs = require('fs')
const zlib = require('zlib')

const readableStream = fs.createReadStream('file2.txt')

const gzip = zlib.createGzip()

const writableStream = fs.createWriteStream('output.txt.gz')

readableStream
    .pipe(gzip)
    .pipe(writableStream)