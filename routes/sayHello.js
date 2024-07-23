const express = require('express');
const router = express.Router();

router.get('/sayHello', (req,res)=>{
    res.json({
        message: 'Hello User',
    })
});

module.exports = router;    