import request from 'superagent'

const rootUrl = '/api/v1'

export function getEmployees(): Promise<string[]> {
  return request.get(rootUrl + '/employees').then((res) => {
    return res.body.employees
  })
}
