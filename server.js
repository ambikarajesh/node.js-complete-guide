const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('middleware');
    next();
})
app.use('/contact', (req,res,next)=>{
    res.send('Contact page');
})
app.use('/', (req,res,next)=>{
    res.send('Home page');
})


app.listen(3000, ()=>{
    console.log('Server start in 3000');
})