import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {
  const navigate=useNavigate();
  const formik = useFormik({
  
  initialValues: {
    email: "",
    password: "",
  },
  onSubmit:async (values)=>{
      try {
      const login= await axios.post("https://contact-manager-backend-phlc.onrender.com/login",values);
      localStorage.setItem("token",login.data.token)
      navigate("/contactlist")
      } catch (error) {
          alert("Login failed")
          console.log(error);
      }

  }
});
	
  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2>Log In</h2>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='admin@gmail.com'
            value={formik.values.email}
            onChange={formik.handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='123456'
            value={formik.values.password}
            onChange={formik.handleChange}
            required
          />

          <button type="submit">Log In</button>
        </form>
        <div className="login-options">
          <Link to="forget-password"></Link>
          <span>
            Don't have an account? <Link to="/register">Create Account</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;

