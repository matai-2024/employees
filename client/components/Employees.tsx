import { useEmployees } from "../hooks/useEmployees";
import Loading from "./Loading";

export default function Employees() {
  const { isPending, isError, error, data } = useEmployees()

  if (isPending) {
    return <Loading />
  }

  if (isError) {
    return (
      <p>
        An error has occurred: {error.message}
      </p>
    )
  }

  return (
    <section>
        { data.map((employee) => {
          return(
          <div key={employee.id}>
            <h6>{employee.name}</h6>
            <p>Title: {employee.title}</p>
            <p>Role: {employee.role}</p>
            <p>DOB: {String(employee.dob)}</p>
            <p>Allergies: {employee.allergies.join(', ')}</p>
          </div>
        )}) }
    </section>
  )
}