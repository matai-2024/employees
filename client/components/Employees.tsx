import { useDeleteEmployee } from '../hooks/useEmployees'
import { useEmployees } from '../hooks/useEmployees'
import { IfAuthenticated } from './Authenticated'
import Loading from './Loading'

export default function Employees() {
  const { isPending, isError, error, data } = useEmployees()
  const del = useDeleteEmployee()

  if (isPending) {
    return <Loading />
  }

  if (isError) {
    return <p>An error has occurred: {error.message}</p>
  }

  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    //In future, I want Super Admins ONLY be able to delete.
    del.mutate(e.target.name)
  }

  function handleEdit(e: React.MouseEvent<HTMLButtonElement>) {}

  return (
    <section>
      <h1>Employee Overview</h1>
      {data.map((employee) => {
        return (
          <div className="employee-container" key={employee.id}>
            <div className="dp-btns">
              <img
                src={`../../images/${employee.id}.webp`}
                alt={`${employee.name}'s profile`}
              ></img>
              <div>
                <IfAuthenticated>
                  <button
                    className="edit-del-btns"
                    onClick={handleEdit}
                    name={String(employee.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="edit-del-btns"
                    onClick={handleDelete}
                    name={String(employee.id)}
                  >
                    Delete
                  </button>
                </IfAuthenticated>
              </div>
            </div>
            <div>
              <h2>{employee.name}</h2>
              <p>
                <strong>Title:</strong> {employee.title}
              </p>
              <p>
                <strong>Role:</strong> {employee.role}
              </p>
              <p>
                <strong>DOB:</strong> {String(employee.dob)}
              </p>
              <p>
                <strong>Allergies:</strong> {employee.allergies.join(', ')}
              </p>
            </div>
          </div>
        )
      })}
    </section>
  )
}
