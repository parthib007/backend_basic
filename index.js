require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get('/twitter', (req,res)=>{
    res.send('parthibdas')
})

app.get('/login', (req,res)=>{
    res.send('<h1 align="center">Login for more info</h1>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`App is listening to ${port}`)
})