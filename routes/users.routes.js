const express = require('express')
const router = express.Router()
const service = require('../controllers/user.controller')

router.get('/', async (req, res) => {
  try {
    const users = await service.getUsers()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
