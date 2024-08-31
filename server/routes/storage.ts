import { getAllergies, getIds } from "../db/employees"

export async function formatData(data) {
  console.log('Formatting data...')
  const noAllergies = {...data}
  delete noAllergies.allergies
  noAllergies.dob = Date.parse(noAllergies.dob)
  const newId = await generateId()
  return {...noAllergies, id: newId}
}

async function generateId() {
  //Finds highest id# and returns the value + 1
  const ids = await getIds()
  const arr = ids.map((obj) => obj.id)
  arr.reduce((a, obj) => obj.id > a ? obj.id : a, 0)
  const newId = (Math.max(...arr) + 1)
  return newId
}

export async function manageAllergies(allergies) {
  if (allergies.length === 0) return
  const currentAllergies = await getAllergies()

  //Initialise allergyId var at 0
  //LOOP
  //If allergy array does not include allergy then update or calculate var and --> ADD TO ALLERGY DB
  //Then ...
  //Employee ID and allergy ID --> ADD TO EMPLOYEES_ALLERGIES DB
}