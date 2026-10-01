// const sinon = require("sinon");
// const fs = require("fs");
// // We want to test a function that reads a file,
// //but without actually reading from disk.
// const readFileStub = sinon.stub(fs, "readFile");
// // Force the stub to return a specific error
// readFileStub.yields(new Error("File not found"), null);

// fs.readFile("test.txt", (err, data) => {
// if (err) console.log("Caught expected error:", err.message);
// });
// // Restore the original function after test
// readFileStub.restore()


const sinon = require('sinon')
const fs = require('fs')

const readFileStub = sinon.stub(fs, 'readFile')

readFileStub.yields(new Error("File not found"), null)

fs.readFile((err, data) => {
    if (err) console.log("Caught expected error : ", err.message);

});

readFileStub.restore()

