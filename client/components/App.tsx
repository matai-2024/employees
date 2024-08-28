import { useEmployees } from '../hooks/useEmployees.ts'

function App() {
  console.log('Call hook...')
  const { data } = useEmployees()

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
      </div>
    </>
  )
}

export default App
