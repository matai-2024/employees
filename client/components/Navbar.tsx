import { Link } from "react-router-dom";

export default function Loading() {
  return (
    <section>
      <ul>
        <li>
          <Link to="/">
          Employees
          </Link>
        </li>
        <li>
          <Link to="/form">
            Add new employee
          </Link>
        </li>
      </ul>
    </section>
  )
}