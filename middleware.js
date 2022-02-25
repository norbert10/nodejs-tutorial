const express =  require('express')
const app = express()

//using middleware
// req => middleware => res


//This is the middleware
const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

app.get('/', logger,(req,res)=>{
    res.send('Home page')
})

app.get('/about', (req,res)=>{
    res.status(200).send('This is About page')
})


app.listen(5000,()=>{
    console.log('Server listening on port 5000...');
})