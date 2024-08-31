
export interface Employees {
  id: number
  name: string
  title: string
  role: string
  dob: Date
  allergies: string[]
}

export interface NewEmployee {
  name: string
  title: string
  role: string
  dob: Date
  allergies: string
}