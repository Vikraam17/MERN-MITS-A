import React, { useState } from "react";

const Signup = () => {
    const [formData,setFormData]=useState({
        name:"",
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
        name:"",
        email:"",
        password:""
    })
        alert("Form Submitted");
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" placeholder="Enter the name"
        value = {formData.name} onChange={handleChange} />
        <br /><br />
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

export default Signup;
