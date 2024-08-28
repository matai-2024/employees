import express from 'express'
import { getAllEmployees } from '../db/employees'
import { Employees } from '../../models/employees'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    console.log('Make request to interact with db')
    const employees: Employees[] = await getAllEmployees()
    console.log(employees)
    res.json(employees)
  } catch (err) {
    console.log(err)
    res.sendStatus(500).send(`Error retreiving employees: ${err}`)
  }
})

export default router