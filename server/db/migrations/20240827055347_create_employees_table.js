export function up(knex) {
  return knex.schema.createTable('employees', (table) => {
    table.integer('id').primary()
    table.string('name')
    table.string('title')
    table.string('role')
    table.date('dob')
  })
}

export function down(knex) {
  return knex.schema.dropTable('employees')
}