const express = require('express');
const router = express.Router();

router.use('/contact', (req,res,next)=>{
    res.send("<html><body><h1>Enter the phone NO:</h1> <form action = '/contact-detail' method = 'POST'> <input type = 'text' name = 'number'/><button type = 'submit'>Submit</button></form></body></html>");
})

router.post('/contact-detail', (req,res, next)=>{
    console.log(req.body);
    res.redirect('/contact');
})


module.exports = router;