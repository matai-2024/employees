import request from 'superagent'
import { Employees } from '../../models/employees'

const rootUrl = '/api/v1'

export function getEmployees(): Promise<Employees[]> {
  console.log('Make request to back-end...')
  return request.get(rootUrl + '/employees').then((res) => {
    return res.body
  })
}

export function addEmployee(data) {
  console.log('API client reached')
  return request.post(rootUrl + `/form`).send(data).then((res) => {
    return res.body
  })
}
