const fs = require('fs')


// Interview Scenario: “Why does 
// fs.readFile put the error object first in its callback?
// What happens if I don’t handle it?”
console.log("Child process started");


fs.readFile('file.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err.message);
        return
    }

    console.log(result);

}
)

// Code can handle error gracefully, else node will throw error and below code walos will be executed

//error = Error("ENOENT: no such file or directory...")
// data = undefined