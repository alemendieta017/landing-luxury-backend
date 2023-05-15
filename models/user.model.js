const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  role: String,
  registeredAt: {
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User
