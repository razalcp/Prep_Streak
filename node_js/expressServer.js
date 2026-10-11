const express = require('express')

const app = express()


function loggingMiddleWare(req, res, next) {
    console.log(`${req.method} ${req.url} ${new Date().toISOString()}`);
    next('User has no access')
}
function calculatingMiddleware(req, res, next) {
    const { num1, num2 } = req.body
    const result = num1 + num2
    res.result = result
    next()
}
app.use(express.json())
app.use(loggingMiddleWare)
app.use(calculatingMiddleware)

app.use((err, req, res, next) => {
    console.log(err);

    res.send({ error: err })
})

app.get('/users', (req, res) => {
    res.send([
        { id: 1, name: 'Razal' },
        { id: 2, name: 'Arun' }
    ])
});

app.post('/sum', (req, res) => {
    // console.log(req);
    console.log(res);

    res.send({ total: res.result })
})

app.listen(3001, () => {
    console.log(`Server listening at http://localhost:3001`);

})