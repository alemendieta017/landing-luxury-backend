const Lead = require('../models/lead.model.js')

const getLeads = async () => {
  const leads = await Lead.find({})
  return leads
}

const createLead = async (lead) => {
  const newLead = new Lead(lead)
  await newLead.save()
  return newLead
}

const deleteLead = async (id) => {
  await Lead.findByIdAndDelete(id)
}

module.exports = {
  getLeads,
  createLead,
  deleteLead,
}
