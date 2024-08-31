import express from 'express'
import { formatData, manageAllergies } from './storage'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    manageAllergies(req.body)
    const newEmployee = formatData(req.body)
    res.sendStatus(201)
  } catch (err) {
    console.log(err)
    res.sendStatus(500).send(`Error retreiving employees: ${err}`)
  }
})

export default router