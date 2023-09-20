const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    console.log("mensaje a root de música pop")
    res.send("ok")
})

router.get('/id', (req,res) => {
    console.log("mensaje a root de música pop de id: " + req.params.id)
    res.send("música pop de id: " + req.params.id)
})

module.exports = router;