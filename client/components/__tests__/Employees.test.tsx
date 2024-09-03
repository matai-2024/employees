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

/* TESTS */

describe('Employee data renders to page', () => {
  it('An employee renders to the page with their name', async () => {
    //nock the API call
    nock('http://localhost').get('/api/v1/employees').reply(200, fakeEmployees)
    //render front-end route
    const screen = renderRoute('/')
    const employeeName = await screen.findByText('Fakey Jackson') //Employee 1
    expect(employeeName).toBeInTheDocument()
  })
  it("An employee's title renders", async () => {
    nock('http://localhost').get('/api/v1/employees').reply(200, fakeEmployees)
    const screen = renderRoute('/')
    const title = await screen.findByText('Assistant') //Employee 2
    expect(title).toBeInTheDocument()
  })
  it("An employee's role renders", async () => {
    nock('http://localhost').get('/api/v1/employees').reply(200, fakeEmployees)
    const screen = renderRoute('/')
    const title = await screen.findByText('Super Admin') //Employee 1
    expect(title).toBeInTheDocument()
  })
  it("An employee's DOB renders", async () => {
    nock('http://localhost').get('/api/v1/employees').reply(200, fakeEmployees)
    const screen = renderRoute('/')
    const title = await screen.findByText('1989-12-03') //Employee 2
    expect(title).toBeInTheDocument()
  })
  it("An employee's allergies render to the page with appropriate separation", async () => {
    nock('http://localhost').get('/api/v1/employees').reply(200, fakeEmployees)
    const screen = renderRoute('/')
    const title = await screen.findByText('dogs, cats, people') //Employee 1
    expect(title).toBeInTheDocument()
  })
})
