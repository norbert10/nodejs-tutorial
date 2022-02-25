const express = require('express')
const path = require('path')
const app = express()

//files that server desnot have to change
app.use(express.static('./public'))

app.get('/', (req,res)=>{
    // res.status(200).send('Home page')
    res.sendFile(path.resolve(__dirname, './index.html'))
})
app.get('/about', (req,res)=>{
    res.status(200).send('About page')
})
app.all('*', (req,res)=>{
    res.status(404).send('<h1>Resource not found. Try again</h1>')
})

app.listen(5000, ()=>{
    console.log('The server is listening on port 5000');
})