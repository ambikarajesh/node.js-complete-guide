const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('express-handlebars');
const app = express();
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const errorController = require('./controllers/error');



//const rooDir = require('./path/pathfinder');
console.log(process.mainModule.filename);


// app.use((req,res,next)=>{
//     console.log('middleware');
//     next();
// })
//app.engine('hbs', hbs({defaultLayout:'main-layout', extname:'hbs'}));
app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', shopRouter);

app.use('/admin',adminRouter)

app.use(errorController.error404)

app.listen(3000, ()=>{
    console.log('Server start in 3000');
})