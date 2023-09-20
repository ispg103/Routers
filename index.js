const express = require('express');
const app = express();

const kpopRouter = require('./kpop');

app.use('./kpop', kpopRouter);



app.listen(3000, () => {
    console.log("Started listening at 3000")
})