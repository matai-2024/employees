import { useQuery } from '@tanstack/react-query'
import { getEmployees } from '../apis/employees.ts'

export function useEmployees() {
  const query = useQuery({ queryKey: ['employees'], queryFn: getEmployees })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */
