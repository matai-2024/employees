export interface newEmployee {
  name: string
  title: string
  role: string
  dob: Date
  allergies: string[]
}

export interface Employees extends newEmployee {
  id: number
}