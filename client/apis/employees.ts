import request from 'superagent'
import { Employees } from '../../models/employees'

const rootUrl = '/api/v1'

export function getEmployees(): Promise<Employees[]> {
  console.log('Make request to back-end...')
  return request.get(rootUrl + '/employees').then((res) => {
    return res.body
  })
}
