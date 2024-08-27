export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('employees').del()

  // Inserts seed entries
  await knex('employees').insert([
    { name: 'Amy Jackson', title: 'HR Support', role: 'Super Admin', dob: '1999-05-07'},
    { name: 'Mike Flabowski', title: 'Pant-scarer-offer', role: 'Employee', dob: '1982-02-01'},
    { name: 'Mister McQueen', title: 'Coffee Runner', role: 'Employee', dob: '1977-04-04'},
    { name: 'Dory Bolognese', title: 'Assistant', role: 'Employee', dob: '1989-12-03'}
  ])
}
