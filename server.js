const express = require('express');
const app = express();

// method for express to recognize incoming request as a JSON object, comes from express-------------------------------------------
app.use(express.json());

// endpoints ------------------------------------



// listen ----------------------------------------
app.listen(3001, () => {
    console.log('You hit the JACKPOT, listening')
})