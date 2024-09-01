import express from 'express'
import { deleteEmployeeById, getAllEmployees } from '../db/employees'
import { Employees } from '../../models/employees'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    console.log('Make request to interact with db')
    const employees: Employees[] = await getAllEmployees()
    res.json(employees)
  } catch (err) {
    console.log(err)
    res.sendStatus(500).send(`Error retreiving employees: ${err}`)
  }
})

router.delete('/', async (req, res) => {
  try {
    console.log(req.body)
    console.log('Making delete request...')
    console.log(req.body.id)
    await deleteEmployeeById(Number(req.body.id))
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.sendStatus(500).send(`Error deleting employee: ${err}`)
  }
})

export default router