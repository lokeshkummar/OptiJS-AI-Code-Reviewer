require('dotenv').config()
const express = require('express');
const aiRoutes = require('../src/routes/ai.routes')

const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
res.send("Hello Mitron..!!")
})

app.use('/ai', aiRoutes)


module.exports = app;