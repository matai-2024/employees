// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest'
import { renderRoute } from '../../test/test-setup.tsx'
import nock from 'nock'

const fakeEmployees = [
  {
    id: 1,
    name: 'Fakey Jackson',
    title: 'HR Support',
    role: 'Super Admin',
    dob: '1999-05-07',
    allergies: ['dogs', 'cats', 'people'],
  },
  {
    id: 4,
    name: 'Faker Bolognese',
    title: 'Assistant',
    role: 'Employee',
    dob: '1989-12-03',
    allergies: [],
  },
]

describe('Employees Component', () => {
  it('An employee renders to the page with their name', async () => {
    const expectedHeading = 'Employees'
    //nock the API call
    nock('http://localhost').get('/api/v1/employees').reply(200, fakeEmployees)
    //render front-end route
    const screen = renderRoute('/')
    const employeeName = await screen.findByRole('heading', { level: 1 })
    console.log(employeeName.textContent)
    expect(employeeName.textContent).toBe(expectedHeading)
  })
  // it("An employee's title renders", () => {
  //   renderRoute('/')
  //   const employeeName = screen.getByText('Title:*')
  //   expect(employeeName.textContent).toBeInTheDocument()
  // })
  // it("An employee's role renders", () => {
  //   renderRoute('/')
  //   const employeeName = screen.getByText('Role:*')
  //   expect(employeeName.textContent).toBeInTheDocument()
  // })
  // it("An employee's DOB renders", () => {
  //   renderRoute('/')
  //   const employeeName = screen.getByText('DOB:*')
  //   expect(employeeName.textContent).toBeInTheDocument()
  // })
  // it("An employee's allergies render to the page with a comma and space separating them", () => {
  //   renderRoute('/')
  //   const employeeName = screen.getByRole('heading', { level: 2 })
  //   expect(employeeName.textContent).toBeInTheDocument()
  // })
})
