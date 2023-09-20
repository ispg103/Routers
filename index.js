const express = require('express');
const app = express();

const kpopRouter = require('./kpop');
app.use('./kpop', kpopRouter);

const popRouter = require('./pop');
app.use('./pop', popRouter);

const salsaRouter = require('./salsa');
app.use('./salsa', salsaRouter);

app.listen(3000, () => {
    console.log("Started listening at 3000")
})