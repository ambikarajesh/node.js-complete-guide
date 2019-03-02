const assignOneHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html><body><h1>Hello, Wecome....</h1></body></html/>')
        res.write("<html><body><form action='/createUser' method='POST'><input type = 'text' name='name'><button type = 'submit'>Send</button><form></body></html/>")
        res.end();
    }else if(url === '/users'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<html><body><ul><li>User one</li><li>User two</li><ul/></body></html/>')
        res.end();
    }else if(url ==='/createUser' && method === 'POST'){
        const body = [];    
        req.on('data', (chunk)=>{
            body.push(chunk);
        })
         return req.on('end', ()=>{
            const data = Buffer.concat(body).toString();
            console.log(data.split('=')[1]);
            res.writeHead(302,{'Location':'/'})
            res.end();
        })
        
    }
}

module.exports = assignOneHandler;