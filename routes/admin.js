const express = require('express');
const router = express.Router();


// this is /admin/contact -> GET
router.get('/contact', (req,res,next)=>{
    res.send("<html><body><h1>Enter the phone NO:</h1> <form action = '/admin/contact' method = 'POST'> <input type = 'text' name = 'number'/><button type = 'submit'>Submit</button></form></body></html>");
})

// this is /admin/contact -> POST
router.post('/contact', (req,res, next)=>{
    console.log(req.body);
    res.redirect('/admin/contact');
})


module.exports = router;