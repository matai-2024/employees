import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Employees from './components/Employees.tsx'
import Form from './components/Form'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Employees />} />
    <Route path="form" element={<Form />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
