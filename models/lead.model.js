const mongoose = require('mongoose')
const leadSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  registeredAt: {
    type: Date,
    default: Date.now,
  },
})

const Lead = mongoose.model('Lead', leadSchema)

module.exports = Lead
