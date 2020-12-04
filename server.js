const express = require('express');
const app = express();

// method for express to recognize incoming request as a JSON object, comes from express-------------------------------------------
// app.use(express.json());

// endpoints ------------------------------------
app.get('/', (req, res) => {
    res.send('YOU DIT IT');
});


// listen ----------------------------------------
app.listen(3001, () => {
    console.log('You hit the JACKPOT, listening')
})