const express = require('express');
const app = express();

// middleware, method for express to recognize incoming request as a JSON object, comes from express-------------------------------------------
app.use(express.json());

// endpoints ------------------------------------
app.post('/api/v1/linter', (req, res) => {
    console.log(req.body);
    res.send('YOU DIT IT');
});


// listen ----------------------------------------
app.listen(3001, () => {
    console.log('You hit the JACKPOT, listening')
})