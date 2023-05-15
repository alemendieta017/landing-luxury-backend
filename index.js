const express = require('express')
const app = express()
const mongoose = require('mongoose')
const service = require('./controllers/leads.controller')
const cors = require('cors')
const port = 3000

const leadsRouter = require('./routes/leads.routes')
const usersRouter = require('./routes/users.routes')
const chimpRouter = require('./routes/chimp.routes')

// Connect to MongoDB
// mongoose
//   .connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/db', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to MongoDB')
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// Middlewares

app.use(cors())
app.use(express.json())

// Routes

app.use('/leads', leadsRouter)
app.use('/users', usersRouter)
app.use('/chimp', chimpRouter)

// Start server

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
