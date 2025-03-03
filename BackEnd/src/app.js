const express = require('express');
const aiRoutes = require('../src/routes/ai.routes');
const cors = require('cors');
require('dotenv').config()

const app = express()

app.use(cors(
    {
        origin: process.env.FRONTEND_URL,
        credentials: true,   
    }
))

app.use(express.json())

//routes
app.use('/ai', aiRoutes)


module.exports = app;