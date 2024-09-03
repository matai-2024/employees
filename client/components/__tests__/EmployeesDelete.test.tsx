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

const fakeEmployee = [
  {
    id: 1,
    name: 'Fakey Jackson',
    title: 'HR Support',
    role: 'Super Admin',
    dob: '1999-05-07',
    allergies: ['dogs', 'cats', 'people'],
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
      .reply(200, fakeEmployee)
      .persist()

    // destructure user and screen from '/'
    const { user, ...screen } = renderRoute('/')

    // get 'delete' button, expect it to be there, click on it
    const deleteButton = await screen.findByRole('button', {
      name: 'Delete',
    })

    expect(deleteButton).toBeVisible()
    // expect(initialScope.isDone()).toBe(true)

    //create a scope for this nock
    const deleteScope = nock('http://localhost')
      .delete('/api/v1/employees/1')
      .reply(200)

    await user.click(deleteButton) 
    // click the button and expect the nock scope to be done
    expect(deleteScope.isDone()).toBe(true)
  })
})
