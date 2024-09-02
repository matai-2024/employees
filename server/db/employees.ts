import { EmployeesAllergies, NewAllergy, NewEmployee } from '../../models/employees.ts'
import connection from './connection.ts'

const db = connection

export async function getIds() {
  return await db('employees').select('id')
}

export async function getAllergies() {
  return await db('allergies').select('allergy')
}

export async function getAllEmployees() {
  console.log('Interact with db')

  //Organise and select return vals
  return await db('employees')
    .select('employees.name', 'employees.id', 'employees.title', 'employees.role', 'employees.dob')
    .leftJoin('employees_allergies', 'employees.id', 'employees_allergies.employee_id')
    .leftJoin('allergies', 'employees_allergies.allergy_id', 'allergies.id')
    .groupBy('employees.name')
    .orderBy('employees.name')

    //Define output
    .then(rows => {
      const result = rows.map(async (row) => {
        return {
        id: row.id,
        name: row.name,
        title: row.title,
        role: row.role,
        dob: row.dob,
        allergies: await db('allergies')
          .join('employees_allergies', 'allergies.id', 'employees_allergies.allergy_id')
          .where('employees_allergies.employee_id', row.id)
          .pluck('allergy')
        }})
      return Promise.all(result)
    })
}

export async function addNewEmployee(data: NewEmployee) {
  await db('employees').insert(data)
}

export async function addNewAllergy(data: NewAllergy) {
  await db('allergies').insert(data)
}

export async function updateEmployeesAllergies(data: EmployeesAllergies) {
  await db('employees_allergies').insert(data)
}

export async function deleteEmployeeById(id: number) {
  console.log("Employee deleted")
  await db('employees').where({ id }).delete()
}