import { useState } from "react"

export default function Form() {

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    role: '',
    dob: '',
    allergies: ''
  })

  function handleChange(e: React.FormEvent<HTMLFormElement>) {
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="form-container">
      <h1>Add a new employee</h1>
      <form onChange={handleChange} onSubmit={handleSubmit} className="employee-form">
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" value={formData.name}></input>
        <label htmlFor="title">Title:</label>
        <input id="title" value={formData.title}></input>
        <label htmlFor="role">Role:</label>
        <select id="role" name="role" value={formData.role}>
          <option value="Super Admin">Super Admin</option>
          <option value="Admin">Admin</option>
          <option value="Employee">Employee</option>
          <option value="Guest">Guest</option>
        </select>
        <label htmlFor="dob">DOB:</label>
        <input type="date" id="dob" value={formData.dob}></input>
        <label htmlFor="allergies">Allergies:</label>
        <input id="allergies" type="text" value={formData.allergies}></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}