import { beforeAll, beforeEach, expect, describe, it } from 'vitest'
// - import db functions
import {
  getIds,
  getAllergies,
  getAllEmployees,
  addNewEmployee,
  deleteEmployeeById,
} from '../db/employees.ts'
// - add knexfile config for 'test' in :memory:
// - import db-config from connection
import db from '../db/connection.js'
import { NewEmployee } from '../../models/employees.ts'

// - beforeAll and beforeEach to reset the migrations and seeds
beforeAll(async () => {
  // console.log('before all')
  await db.migrate.latest()
})
beforeEach(async () => {
  // console.log('before each ')
  await db.seed.run()
})

describe('getIds', () => {
  it('returns an array of all IDs', async () => {
    //ARRANGE
    const seedExample = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    //ACT
    const ids = await getIds()
    console.log(ids)
    //ASSERT
    expect(ids).toHaveLength(4)
    expect(ids[0]).toStrictEqual(seedExample[0])
  })
})

describe('getAllergies', () => {
  it('returns an array of all allergies', async () => {
    //ARRANGE
    //ACT
    const albums = await getAllergies()
    //ASSERT
    expect(albums).toHaveLength(6)
  })
})

describe('getAllEmployees', () => {
  it('gets all employees and their data', async () => {
    //ARRANGE
    //ACT
    const employees = await getAllEmployees()
    //ASSERT
    expect(employees).toHaveLength(4)
    expect(employees[0].name).toBe('Amy Jackson')
    expect(employees[0].title).toBe('HR Support')
    expect(employees[0].role).toBe('Super Admin')
    expect(employees[0].dob).toBe('1999-05-07')
  })
})

describe('addNewEmployee', () => {
  it('adds a new employee', async () => {
    //ARRANGE
    const example = {
      id: 5,
      name: 'Zichael Jacksonny',
      title: 'Smoko Break Guy',
      role: 'Admin',
      dob: '1958-08-29',
    }
    //ACT
    await addNewEmployee(example)
    const employees = await getAllEmployees()
    //ASSERT
    expect(employees).toHaveLength(5)
    expect(employees[4]).toStrictEqual({ ...example, allergies: [] })
  })

  it('throws an error if no data passed in', async () => {
    //ARRANGE
    let error = ''
    //ACT
    try {
      await addNewEmployee()
    } catch (e) {
      error = e.message
    }
    //ASSERT
    expect(error).toBe(
      'The query is empty',
    )
  })
})

describe('deleteEmployeeById', () => {
  it('deletes an employee by id', async () => {
    //ARRANGE
    const id = 1
    let isDeleted = true
    //ACT
    await deleteEmployeeById(id)
    const employees = await getAllEmployees()
    employees.map((employee) => {
      if (employee.id === id) {
        isDeleted = false
      }
    })
    //ASSERT
    expect(isDeleted).toBe(true)
  })
})
