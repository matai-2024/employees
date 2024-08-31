import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addEmployee } from '../apis/employees'
import { newEmployee } from '../../models/employees'

export function useAddEmployee() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data) => {return addEmployee(data)},
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['employees']})
    }
  })
}