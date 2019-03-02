const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const admin = require('./routes/admin');
const shopRouter = require('./routes/shop');
const rooDir = require('./path/pathfinder');
console.log(process.mainModule.filename);


// app.use((req,res,next)=>{
//     console.log('middleware');
//     next();
// })
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(shopRouter);

app.use('/admin',admin.router)

app.use((req,res,next)=>{
    //res.status(404).sendFile(path.join(rooDir, 'views', 'error.html'))
    res.status(404).render('error', {
        title:'Page not Found'
    })
})

app.listen(3000, ()=>{
    console.log('Server start in 3000');
})