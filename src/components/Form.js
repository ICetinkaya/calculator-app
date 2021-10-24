import React, { useState } from 'react'

export default function Form() {
  const [form,setForm] = useState({name: "", city : ""});

  const handleChange = event => setForm(
    {...form, [event.target.name]: event.target.value}
  );
  return (
    <div className="App">
      <h1>React Tutorial Form</h1>
      <form>
        <input value={form.name}
              onChange={handleChange}
              placeholder="Name"
              name="name"
        /> 

        <select value={form.city} onChange={handleChange} name="city">
          <option value="" disabled>

          </option>
          <option value="Ankara">Ankara</option>
          <option value="Istanbul">Istanbul</option>
          <option value="Izmir">Izmir</option>
        </select>
        
        <button>Submit</button>
      </form>
    </div>
  )
}
