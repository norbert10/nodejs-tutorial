const http = require('http')

const { readFileSync } = require('fs')
const server = http.createServer((req,res)=>{
    console.log(req.url);

    const indexFile = readFileSync('./index.html')

    // console.log(req.method);
    if(req.url==='/'){

        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>Hello there. This is home page</h1>')
        res.write(indexFile)
        res.end()
    }
    else if(req.url==='/about'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>This is the about page</h1>')
        res.end()
    }
    else{
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>OOPS!</h1>')
        res.write('<h2>You are in the wrong place my friend</h2>')
        res.end()
    }
});

server.listen(5000, ()=>{
    console.log('Server is running successfully on port 5000....')
})
