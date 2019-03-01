const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// app.use((req,res,next)=>{
//     console.log('middleware');
//     next();
// })

app.use(bodyParser.urlencoded({extended:true}))

app.use('/contact', (req,res,next)=>{
    res.send("<html><body><h1>Enter the phone NO:</h1> <form action = '/contact-detail' method = 'POST'> <input type = 'text' name = 'number'/><button type = 'submit'>Submit</button></form></body></html>");
})

app.post('/contact-detail', (req,res, next)=>{
    console.log(req.body);
    res.redirect('/contact');
})

app.use('/', (req,res,next)=>{
    res.send('<h1>Home page</h1>');
})
app.listen(3000, ()=>{
    console.log('Server start in 3000');
})