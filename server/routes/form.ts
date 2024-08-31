import express from 'express'
import { Employees } from '../../models/employees'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    console.log('made it to back-end routes')
    console.log(req.body)
    res.send(201)
  } catch (err) {
    console.log(err)
    res.sendStatus(500).send(`Error retreiving employees: ${err}`)
  }
})

export default router