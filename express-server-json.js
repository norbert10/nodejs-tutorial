const express = require('express')
const path = require('path')
const app = express()
const {user} = require('./data')

app.use(express.static('./public'))

app.get('/', (req,res)=>{
    // res.status(200).send('Home page')
    // res.json([{'name':'Norbert', 'school':'USIU'}, {'name':'James', 'school':'TUK'}])
    res.json(user)
    // res.sendFile(path.resolve(__dirname, './index.html'))
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