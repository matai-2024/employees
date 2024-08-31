import { addNewAllergy, getAllergies, getIds, updateEmployeesAllergies } from "../db/employees"

export async function formatData(data) {
  console.log('Formatting data...')
  const newData = {...data}
  const newId = await generateId()
  return {...newData, id: newId}
}

async function generateId() {
  //Finds highest id# and returns the value + 1
  const ids = await getIds()
  const arr = ids.map((obj) => obj.id)
  arr.reduce((a, obj) => obj.id, 0)
  const newId = (Math.max(...arr) + 1)
  return newId
}

//Stores all allergies and deletes afterwards
export async function manageAllergies(data) {
  if (data.allergies.length === 0) return

  //Gets all db allergies
  const currAllergies = await getAllergies()
  const currAllergiesArr = currAllergies.map((a) => a.allergy)

  const newAllergiesArr = data.allergies.split(', ')

  //Assumes allergies will never be deleted from table & are consistent increments
  let newestId = currAllergies.length

  newAllergiesArr.map(async (allergy: string) => {
    if(currAllergiesArr.indexOf(allergy) == -1) {
      console.log('allergy does not exist')
      newestId++
      await addNewAllergy({ id: newestId, allergy: allergy })
      await updateEmployeesAllergies({ employee_id: data.id, allergy_id: newestId})
    } else {
      (`allergy exists: ${data.id}, ${currAllergiesArr.indexOf(allergy) == -1}`)
      //send IDs to employees_allergy table
      await updateEmployeesAllergies({employee_id: data.id, allergy_id: currAllergiesArr.indexOf(allergy)})
    }
  })
  }
