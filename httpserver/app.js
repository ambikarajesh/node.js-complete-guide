const http = require('http');
const routes = require('./routes');
http.createServer(routes).listen(5000, () =>{
    console.log('Server start in 5000');
})