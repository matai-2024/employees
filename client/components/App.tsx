import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

function App() {
  console.log('Call hook...')
  return (
    <>
      <div className="app">
        <Navbar />
        <h1>Employees</h1>
        <Outlet />
      </div>
    </>
  )
}

export default App
