import Employees from "./Employees"

function App() {
  console.log('Call hook...')
  return (
    <>
      <div className="app">
        <h1>Employees</h1>
        <Employees />
      </div>
    </>
  )
}

export default App
