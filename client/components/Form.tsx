import { useState } from 'react'
import { useAddEmployee } from '../hooks/useAddEmployee'

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    role: '',
    dob: '',
    allergies: '',
  })
  const [helperText, setHelperText] = useState({
    name: '',
    title: '',
    role: '',
    dob: '',
    allergies: '',
  })

  const addEmployee = useAddEmployee()

  function handleChange(e: React.FormEvent<HTMLFormElement>) {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    let isValid = true
    //Check if any are empty
    for (const [key, value] of Object.entries(formData)) {
      switch (value) {
        case '':
          helperText[key] = `*This section is required.`
          isValid = false
          break
        default:
          helperText[key] = ''
      }
    }

    if (!isValid) setHelperText({ ...helperText }) //Re-render
    if (isValid) {
      addEmployee.mutate(formData)

      //Instead of resetting form data, navigate to a 'thank you' page
      setFormData({
        name: '',
        title: '',
        role: '',
        dob: '',
        allergies: '',
      })
    } //Send to db
  }

  return (
    <div className="form-container">
      <h1>Add a new employee</h1>
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
        className="employee-form"
      >
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" value={formData.name}></input>
        <p className="helper-text">{helperText.name}</p>

        <label htmlFor="title">Title:</label>
        <input id="title" value={formData.title}></input>
        <p className="helper-text">{helperText.title}</p>

        <label htmlFor="role">Role:</label>
        <select id="role" name="role" value={formData.role}>
          <option value="Super Admin">Super Admin</option>
          <option value="Admin">Admin</option>
          <option value="Employee">Employee</option>
          <option value="Guest">Guest</option>
        </select>
        <p className="helper-text">{helperText.role}</p>

        <label htmlFor="dob">DOB:</label>
        <input type="date" id="dob" value={formData.dob}></input>
        <p className="helper-text">{helperText.dob}</p>

        <label htmlFor="allergies">Allergies:</label>
        <input id="allergies" type="text" value={formData.allergies}></input>
        <p className="helper-text">{helperText.allergies}</p>

        <input className="submit-btn" type="submit" value="Submit"></input>
      </form>
    </div>
  )
}
