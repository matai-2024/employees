import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { NavGroup, NavButton } from './Styled.tsx'
import { Link } from "react-router-dom";

export default function Loading() {
  const { user, logout, loginWithRedirect } = useAuth0()
  
  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <section className="nav">
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
        <NavGroup>
        <IfAuthenticated>
          <NavButton onClick={handleSignOut}>Sign out</NavButton>
          {user && (
            <p>
              Signed in as: {user.nickname}
            </p>
          )}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavButton onClick={handleSignIn}>Sign in</NavButton>
        </IfNotAuthenticated>
      </NavGroup>
      </ul>
    </section>
  )
}