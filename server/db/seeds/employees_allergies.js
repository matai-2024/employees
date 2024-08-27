export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('employees_allergies').del()

  // Inserts seed entries
  await knex('employees_allergies').insert([
    { employee_id: 1, allergy_id: 1 },
    { employee_id: 1, allergy_id: 2 },
    { employee_id: 1, allergy_id: 3 },
    { employee_id: 3, allergy_id: 4 },
  ])
}
