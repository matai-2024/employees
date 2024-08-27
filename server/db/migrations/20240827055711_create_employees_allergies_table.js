export function up(knex) {
  return knex.schema.createTable('employees_allergies', (table) => {
    table.integer('id').primary()
    table.string('employee_id')
    table.string('allergy_id')
  })
}

export function down(knex) {
  return knex.schema.dropTable('employees_allergies')
}