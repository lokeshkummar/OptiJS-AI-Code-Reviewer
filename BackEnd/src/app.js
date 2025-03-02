const express = require('express');
const aiRoutes = require('../src/routes/ai.routes');
const cors = require('cors');

const app = express()

app.use(cors())

app.use(express.json())

//routes
app.use('/ai', aiRoutes)


module.exports = app;