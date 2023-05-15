const express = require('express')
const router = express.Router()
const service = require('../controllers/leads.controller')

router.get('/', async (req, res) => {
  try {
    const leads = await service.getLeads()
    res.json(leads)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const lead = await service.createLead(req.body)
    res.json(lead)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await service.deleteLead(req.params.id)
    res.json({ message: 'Lead deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
