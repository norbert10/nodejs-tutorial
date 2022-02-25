const express = require('express')
const app = express()
const {readFile, writeFile} = require('fs')
app.use(express.static('./public'))
app.use(express.urlencoded({extended: false}))

const {users} = require('./data')

const data = readFile('./index.html', 'utf8', (err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})

app.get('/home', (req,res)=>{
    res.status(200).json({success:true, data:users})
})
app.post('/login', (req,res)=>{
    console.log(req.body);
    const { name } = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    else{

       return res.status(401).send('Please provide the required credentials')
    }
    // res.send('POST method')
})

app.listen(5000, ()=>{
    console.log('Server listening on port 5000...')
})