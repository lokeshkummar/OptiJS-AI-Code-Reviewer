require('dotenv').config();
const express = require('express');
const aiRoutes = require('../src/routes/ai.routes');
const cors = require('cors');

const app = express()

app.use(cors({origin: "https://optijs.vercel.app"}))

app.use(express.json())

app.use('/ai', aiRoutes)


module.exports = app;