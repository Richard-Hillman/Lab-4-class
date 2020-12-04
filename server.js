const express = require('express');
const app = express();
const Linter = require('./Linter');

// middleware, method for express to recognize incoming request as a JSON object, comes from express-------------------------------------------
app.use(express.json());

// endpoints ------------------------------------
app.post('/api/v1/linter', (req, res) => {
    const newLintedText = Linter(req.body)
    console.log(req.body);
    res.send(newLintedText)
    res.send('Linted!');
});


// listen ----------------------------------------
app.listen(3001, () => {
    console.log('You hit the JACKPOT, listening')
})