import axios from "axios";
import React, { useState } from "react";
import "./Register.css";
import  {useNavigate} from  "react-router-dom"


function Register() {
  let navigate=useNavigate();
  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    dob: "",
  });
  let [err, setErr] = useState({});

  function handleUser(event) {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  }
 
  function handleSubmit(event) {
    event.preventDefault();

    let error = validate(user);//calling the validate funtion

    if (Object.keys(error).length === 0) {
      console.log(user);
      let res=axios.post("http://localhost:4000/users",user)
      console.log(res.data)
      navigate("/login")
    } else {
      setErr(error);
    }
  }
  return (
    <div className="layout">
    <div className="login-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <label>
            <span style={{fontWeight:'bold', color: 'black'}}>Username</span> 
            <span style={{ color: 'red'}}>*</span>
        </label>
        <input
          type="text"
          name="username"
          onChange={handleUser}
          placeholder="Enter your name"
        />
        {err.username && <p className="userErr">{err.username}</p>}
        <label>
            <span style={{fontWeight:'bold', color: 'black'}}>Password</span> 
            <span style={{ color: 'red'}}>*</span>
        </label>
        <input
          type="password"
          name="password"
          onChange={handleUser}
          placeholder="Enter your password"
        />
        {err.password && <p className="userErr">{err.password}</p>}
        <label>
            <span style={{fontWeight:'bold', color: 'black'}}>Email</span> 
            <span style={{ color: 'red'}}>*</span>
        </label>
        <input
          type="email"
          name="email"
          onChange={handleUser}
          placeholder="Enter your Email"
        />
        {err.email && <p className="userErr">{err.email}</p>}
        <label>
            <span style={{fontWeight:'bold', color: 'black'}}>Date of Birth</span> 
            <span style={{ color: 'red'}}>*</span>
        </label>
        <input
          type="date"
          name="dob"
          onChange={handleUser}
          placeholder="Enter your Date of Birth"
        />
        {err.dob && <p className="userErr">{err.dob}</p>}
        <button className="button_login" >Register</button>
      </form>
    </div>
    </div>
  );
}
 
export default Register;
 
function validate(user) {
  let err = {};
  if (!user.username) {
    err.username = "Username is Requried";
  }
  if (!user.password) {
    err.password = "Password is Requried";
  }
  if (!user.email) {
    err.email = "Email is Requried";
  }
  if (!user.dob) {
    err.dob = "Date of Birth is Requried";
  }
  return err;
}