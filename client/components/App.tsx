import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

function App() {
  console.log('Call hook...')
  return (
    <>
      <div className="app">
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App
