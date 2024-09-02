
export interface Employees {
  id: number
  name: string
  title: string
  role: string
  dob: Date
  allergies: string[]
}

export interface NewEmployeeRequest {
  name: string
  title: string
  role: string
  dob: Date
  allergies: string
}
export interface NewEmployee {
  id: number
  name: string
  title: string
  role: string
  dob: Date
}

export interface NewAllergy {
  id: number
  allergy: string
}

export interface EmployeesAllergies {
  employee_id: number
  allergy_id: number
}