import express from 'express'
import { formatData, manageAllergies } from './storage'
import { addNewEmployee } from '../db/employees'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const data = await formatData(req.body)
    await manageAllergies(data)
    await addNewEmployee({id: data.id, name: data.name, title: data.title, role: data.role, dob: data.dob})
    res.sendStatus(201)
  } catch (err) {
    console.log(err)
    res.sendStatus(500).send(`Error retreiving employees: ${err}`)
  }
})

export default router