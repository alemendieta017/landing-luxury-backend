const express = require('express')
const router = express.Router()
const client = require('@mailchimp/mailchimp_marketing')

const listId = '287ed33903'
const apiKey = '002e7514b0a9ab9020400257ebaf0d5f-us20'

client.setConfig({
  apiKey: apiKey,
  server: 'us20',
})

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const response = await client.lists.addListMember(
      listId,
      {
        email_address: req.body.email_address,
        merge_fields: req.body.merge_fields,
        status: 'subscribed',
      },
      {
        skipMergeValidation: false,
      }
    )
    res.send(response)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
