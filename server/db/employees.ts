import connection from './connection.ts'

const db = connection

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