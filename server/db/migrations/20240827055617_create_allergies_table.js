export function up(knex) {
  return knex.schema.createTable('allergies', (table) => {
    table.integer('id').primary()
    table.string('allergy')
  })
}

export function down(knex) {
  return knex.schema.dropTable('allergies')
}