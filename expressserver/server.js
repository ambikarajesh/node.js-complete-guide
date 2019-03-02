const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const rooDir = require('./path/pathfinder');
console.log(process.mainModule.filename);


// app.use((req,res,next)=>{
//     console.log('middleware');
//     next();
// })

app.use(bodyParser.urlencoded({extended:true}))

app.use(shopRouter);

app.use('/admin',adminRouter)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rooDir, 'views', 'error.html'))
})

app.listen(3000, ()=>{
    console.log('Server start in 3000');
})