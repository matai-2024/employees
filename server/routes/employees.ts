import express from 'express'
import { getAllEmployees } from '../db/employees'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const employees = await getAllEmployees()
    console.log(employees)
    res.send(employees)
  } catch (err) {
    console.log(err)
    res.sendStatus(500).send(`Error retreiving employees: ${err}`)
  }
})

export default router