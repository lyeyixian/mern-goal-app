const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8080
const { errorHandler } = require('./middleware/errorMiddleware')

const connectDB = require('./config/db')
connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`))
