// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeAll, describe, it, vi, expect } from 'vitest'
import { renderRoute } from '../../test/test-setup.tsx'
import nock from 'nock'

import { useAuth0 } from '@auth0/auth0-react'
vi.mock('@auth0/auth0-react')

beforeAll(() => {
  nock.disableNetConnect()
})

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

const ACCESS_TOKEN = 'testing_access_token'

describe('Deleting an employee', () => {
  it('removes the employee from the page', async () => {
    // mock auth0 incl. getAccessTokenSilently
    vi.mocked(useAuth0).mockReturnValue({
      isAuthenticated: true,
      user: { sub: 'fred@example.org', nickname: 'fred' },
      getAccessTokenSilently: vi.fn(async () => ACCESS_TOKEN),
    } as any)
    //nock (persist)
    nock('http://localhost')
      .get('/api/v1/employees')
      .reply(200, fakeEmployees)
      .persist()

    // destructure user and screen from '/'
    const { user, ...screen } = renderRoute('/')

    // get 'delete' button, expect it to be there, click on it
    const addFruitButton = await screen.findByRole('button', {
      name: 'Delete',
    })
    expect(addFruitButton).toBeVisible()
    await user.click(addFruitButton)
    // find inputs for "Name" and "Average Grams Each", and fill them out
    const nameInput = await screen.findByLabelText('Name:')
    await user.type(nameInput, 'Snozberry')
    const weightInput = await screen.findByLabelText('Average Grams Each:')
    await user.type(weightInput, '35')
    //find the "Add fruit" button
    const submitButton = await screen.findByRole('button', {
      name: 'Add fruit',
    })

    //create a scope for this nock
    const scope = nock('http://localhost', {
      reqheaders: {
        authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
      .post('/api/v1/fruits', {
        fruit: { name: 'Snozberry', averageGramsEach: '35' },
      })
      .reply(201)

    // click the button and expect the nock scope to be done
    await user.click(submitButton)
    expect(scope.isDone()).toBe(true)
  })
})
