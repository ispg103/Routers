const express = require('express');
const router = express.Router();

// 127.0.0.1:3000/salsa
router.get('/', (req, res)=>{
    console.log("mensaje a root de musica salsa")
    res.send("ok")
})

router.get('/:id', (req, res)=>{
    console.log("mensaje a root de musica salsa id: " + req.params.id )
    res.send("musica salsa  de id: " + req.params.id )
})


module.exports = router;