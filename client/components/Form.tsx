export default function Form() {
  return (
    <div>
      <form>
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name"></input>
        <label htmlFor="title">Title:</label>
        <input id="title"></input>
        <label htmlFor="role">Role:</label>
        <select id="role" name="role">
          <option value="Super Admin">Super Admin</option>
          <option value="Admin">Admin</option>
          <option value="Employee">Employee</option>
          <option value="Guest">Guest</option>
        </select>
        <label htmlFor="dob">DOB:</label>
        <input type="date" id="dob"></input>
        <label htmlFor="allergies">Allergies:</label>
        <input id="allergies" type="text"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}