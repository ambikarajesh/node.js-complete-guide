const fs = require('fs');

const requestHandler = (req, res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write("<head><body><form action ='/message' method = 'POST'><input type ='text' name= 'message'/><button type = 'submit'>Send</button></form></body></html>")
        return res.end();
    }
    else if(url === '/message' && method === 'POST'){
        const data = [];
        req.on('data',chunk =>{
            data.push(chunk)
        })
        return req.on('end', ()=>{
            const buffer = Buffer.concat(data).toString();
            fs.writeFile('./text.txt', buffer.split('=')[1], (err)=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            })           
        })
        
        
    }
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write("<head><body><h1>Hello</h1></body></html>")
    return res.end();

}

module.exports = requestHandler;