const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const { errorHandler } = require('./middleware/errorMiddleware')

const connectDB = require('./config/db')
connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
  })
}

app.use(errorHandler)

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`))
