import React, { useState } from "react";

const Login = () => {
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
        setFormData({
        email:"",
        password:""
    })
        alert("Form Submitted");
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" placeholder="Enter the Email"
        value = {formData.email} onChange={handleChange} />
        <br /><br />
        <label htmlFor="password">Password : </label>
        <input
          type="password" name="password"
          placeholder="Enter the password"
          value={formData.password} onChange={handleChange}
        />
        <br /><br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
