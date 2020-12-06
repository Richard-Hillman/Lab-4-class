const express = require('express');
const app = express();
const { linter } = require('./linter');
const Stack = require('./Stack')

// middleware, method for express to recognize incoming request as a JSON object, comes from express-------------------------------------------
app.use(express.json());


// endpoints ------------------------------------
app.post('/api/v1/lint', (req, res) => {
    const newLintedText = linter(req.body.lint)
    res.send(newLintedText)
});


// listen ----------------------------------------
app.listen(3001, () => {
    console.log('You hit the JACKPOT, listening')
})