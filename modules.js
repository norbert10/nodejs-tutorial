const os = require('os')
const path = require('path')
const http = require('http')
const { readFileSync, writeFileSync } = require('fs')

// const username = os.userInfo()
// console.log(username)

// const currentOs = {
//     name: os.type(),
//     upTime: os.uptime(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }
// console.log(currentOs);

// console.log(path.sep)
// const filePath = path.join('/myfolder', 'subfolder', 'file.txt')
// console.log(filePath);

// const baseName = path.basename(filePath)
// console.log(`The file basename is ${baseName}`)

// const readFile = readFileSync('./myfolder/subfolder/file.txt', 'utf8')
// const readSecondFile = readFileSync('./myfolder/subfolder/file2.txt', 'utf8', (err, res)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(res)
// })
// console.log(readFile);
// // console.log(readSecondFile);

// writeFileSync('./myfolder/subfolder/written.txt', 'Hello there')
const PORT = 5000

const server = http.createServer((req, res) => {
    if (req.url === '/') {

        res.end('The server is running successfully')
    }
    if (req.url === '/about') {
        res.end('This is the about page')
    } else {
        res.end('Wrong route')
    }

    res.send('You are good to go')
    res.end();



})

server.listen(PORT, ()=>{
    console.log('Server listening on port 5000...')
})