const http = require('http')
const {readFile, writeFile} = require('fs')
const PORT = 5000

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Home page')
    }
    if(req.url==='/about'){
        res.end('This is about page')
    }
    res.end('Error page')
})

readFile('./myfolder/subfolder/file.txt', 'utf8', (err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})

server.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}....`)
})

