import React, { useState } from 'react';

export default function Form() {
    const [inputs, setInputs] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted');
        console.log(inputs);
        alert('Form submitted.')
    }
    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        // console.log(`${name}: ${value}`);
        setInputs(hello => ({...hello, [name]:value}))
        // console.log(inputs)
    }
  return <div>
      <form onSubmit={handleSubmit}>
          <label>
              First Name: <input name='firstName' onChange={handleChange} type='text' value={inputs.firstName || ''} placeholder='Enter First Name'></input>
          </label>
          <br/><br/>
          <label>
              Last Name: <input name='lastName' onChange={handleChange} type='text' value={inputs.lastName || ''} placeholder='Enter Last Name'></input>
          </label>
          <br/><br/>
          <label>
              Username: <input name='username' onChange={handleChange} type='text' value={inputs.username || ''} placeholder='Enter Username'></input>
          </label>
          <br/><br/>
          <label>
              Email: <input name='email' onChange={handleChange} type='email' value={inputs.email || ''} placeholder='Enter Email'></input>
          </label>
          <br/><br/>
          <label>
              Password: <input name='password' onChange={handleChange} type='password' value={inputs.password || ''} placeholder='Enter Password'></input>
          </label>
          <br/><br/>
          <input type='submit' value='SUBMIT'/>
      </form>
  </div>;
}
