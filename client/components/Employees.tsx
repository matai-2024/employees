import { useEmployees } from "../hooks/useEmployees";
import { IfAuthenticated } from "./Authenticated";
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

  function handleDelete(e:  React.MouseEvent<HTMLButtonElement>) {
    //In future, I want Super Admins ONLY be able to delete. For now, just me is fine
    console.log(e.target.name)
  }

  function handleEdit(e:  React.MouseEvent<HTMLButtonElement>) {
    
  }

  return (
    <section>
        { data.map((employee) => {
          return(
          <div className='employee-container' key={employee.id}>
            <img src={`../../images/${employee.id}.png`} alt="user"></img>
            <div>
              <h6>{employee.name}</h6>
              <p>Title: {employee.title}</p>
              <p>Role: {employee.role}</p>
              <p>DOB: {String(employee.dob)}</p>
              <p>Allergies: {employee.allergies.join(', ')}</p>
            </div>
            <IfAuthenticated>
              <button onClick={handleEdit} name={String(employee.id)}>Edit</button>
              <button onClick={handleDelete} name={String(employee.id)}>Delete</button>
            </IfAuthenticated>
          </div>
        )}) }
    </section>
  )
}