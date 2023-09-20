const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    console.log("mensaje a root de música kpop")
    res.send("ok")
})

router.get('/id', (req,res) => {
    console.log("mensaje a root de música kpop de id: " + req.params.id)
    res.send("música kpop de id: " + req.params.id)
})

module.exports = router;