const express = require('express')
const authRoute = require('./routes/auth.route')

const app = express()

app.use(express.json())

// Auth Routes
app.use('/api/auth',authRoute)


module.exports = app