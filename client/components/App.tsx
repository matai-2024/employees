import { useEmployees } from '../hooks/useEmployees.ts'

function App() {
  console.log('Call hook...')
  const { data } = useEmployees()

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        {/* <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
      </div>
    </>
  )
}

export default App
