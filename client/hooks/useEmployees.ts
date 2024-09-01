import { useQuery } from '@tanstack/react-query'
import { getEmployees } from '../apis/employees.ts'

export function useEmployees() {
  console.log('Update useQuery...')
  const query = useQuery({ queryKey: ['employees'], queryFn: getEmployees })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { removeEmployee } from '../apis/employees'

export function useDeleteEmployee() {
  console.log('Mutation called...')
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (id) => {
      return await removeEmployee(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['employees']})
    }
  })
}

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */
