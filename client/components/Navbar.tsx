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
        <div className="nav-left">
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
        </div>
        <div className="nav-right">
          <NavGroup>
          <IfAuthenticated>
          {user && (
              <p className="signed-in-as-text">
                Signed in as: {user.nickname}
              </p>
            )}
            <button className="log-btn" onClick={handleSignOut}>Sign out</button>
          </IfAuthenticated>
            <IfNotAuthenticated>
              <button className="log-btn" onClick={handleSignIn}>Sign in</button>
            </IfNotAuthenticated>
          </NavGroup>
        </div>
    </section>
  )
}