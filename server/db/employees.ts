import connection from './connection.ts'

const db = connection

export async function getAllAllergies() {
  return await db('employees_allergies')
  .join('allergies','allergies.id','employees_allergies.allergy_id')
  .join('employees','employees.id','employees_allergies.employee_id')
  .groupBy('')
  .orderBy('')
  .select('employees.name as name', db.raw('ARRAY_AGG (tags.label) tags'))
  .first()
}

export async function getAllEmployees() {
  // return await db('employees').select()
  return await db('employees_allergies')
  .join('allergies','allergies.id','employees_allergies.allergy_id')
  .join('employees','employees.id','employees_allergies.employee_id')
  .groupBy('')
  .orderBy('')
  .select('employees.name as name', db.raw('ARRAY_AGG (tags.label) tags'))
  .first()
}

// .join('employees_allergies','employees.id','employees_allergies.employee_id')
// .join('allergies','allergies.id','employees_allergies.allergy_id')