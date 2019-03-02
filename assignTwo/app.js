
const express = require('express');
const path = require('path');
const homeRouter = require('./routes/home');
const errorRouter = require('./routes/error');
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use(homeRouter)
app.use(errorRouter)
app.listen(5000, ()=>{
    console.log('Server start at 5000');
})