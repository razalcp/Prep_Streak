const { Worker } = require('worker_threads')

function runWorker() {
    return new Promise((resolve, reject) => {
        let worker = new Worker('./worker.js')
        worker.on('message', resolve)
        worker.on('error', reject)
    })
}

async function main() {
    console.log("Starting Worker");

    const result = await runWorker()
    console.log("Heavy Computed Value from a different worker = ", result);

}
main()
console.log(`This here should not be affected by the heavy computation , 
    since its running seperately on a diffent node.js instance with seperate memory and 
    eventloop the synchronous code here is not blocked, so this is printed`);
