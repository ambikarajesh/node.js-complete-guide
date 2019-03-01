const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
// app.use((req,res,next)=>{
//     console.log('middleware');
//     next();
// })

app.use(bodyParser.urlencoded({extended:true}))

app.use(shopRouter);

app.use('/admin',adminRouter)

app.use((req,res,next)=>{
    res.status(404).send('<p>Page not Found</p>')
})

app.listen(3000, ()=>{
    console.log('Server start in 3000');
})