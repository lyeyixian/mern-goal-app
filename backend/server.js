const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8080
const { errorHandler } = require('./middleware/errorMiddleware')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`))
