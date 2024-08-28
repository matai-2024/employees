import { useEmployees } from "../hooks/useEmployees";

export default function Employees() {
  const { isPending, isError, data } = useEmployees()
  return (
    <div>
      meow
    </div>
  )
}