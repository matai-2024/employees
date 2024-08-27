export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('allergies').del()

  // Inserts seed entries
  await knex('allergies').insert([
    {allergy: 'dogs'},
    { allergy: 'cats' },
    { allergy: 'people' },
    { allergy: 'snails' },
    { allergy: 'coffee' },
    { allergy: 'vitamin c' },
  ])
}
