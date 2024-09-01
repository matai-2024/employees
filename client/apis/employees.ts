import request from 'superagent'
import { Employees } from '../../models/employees'

const rootUrl = '/api/v1'

export function getEmployees(): Promise<Employees[]> {
  return request.get(rootUrl + '/employees').then((res) => {
    return res.body
  })
}

export function removeEmployee(id: string) {
  console.log(`ID: ${id}`)
  return request.delete(rootUrl + '/employees').send({id: id}).then((res) => {
    return res.body
  })
}

export function addEmployee(data) {
  return request.post(rootUrl + `/form`).send(data).then((res) => {
    return res.body
  })
}