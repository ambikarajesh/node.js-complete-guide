const http = require('http');
const routes = require('./assignOneHandler');

http.createServer(routes).listen(5000, ()=>{
    console.log('Server start at 5000');
})