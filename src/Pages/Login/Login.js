import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { userLoginObj } from '../../context/UserLogin'
import "./Login.css"
import { useNavigate } from 'react-router-dom';

 
function Login() {
 
  // initializing the navigate fnc using useNavigate hook
  let navigate=useNavigate();


   let {handleUserLogin,setLoginStatus}=useContext(userLoginObj)
  let [user,setUser]=useState({
    username:"",
    password:""
  })
  function handleUser(event){
     let name=event.target.name;
     let value=event.target.value;
     setUser({...user,[name]:value})
  }
  let handleSubmit = async (e) => {
    e.preventDefault();
   
    let isLoginSuccess = await handleUserLogin(user); //calling the handleuserlogin fnc with user obj
    if (isLoginSuccess) {
      setLoginStatus(true)
        navigate('/');
    }
    else{
        alert("Please enter username & password")
    }
};
  return (
    <div className='layout'>
    
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
            <span style={{fontWeight:'bold', color: 'black'}}>Username</span> 
            <span style={{ color: 'red'}}>*</span>
        </label>
        <input type="text" name='username' onChange={handleUser} placeholder="Enter your name" />
        <label>
            <span style={{fontWeight:'bold', color: 'black'}}>Password</span>
            <span style={{ color: 'red'}}>*</span>
             </label>
        <input type="password" name='password' onChange={handleUser} placeholder="Enter your password" />
        <button className='button_login'>Login</button>
        <Link className='register' to="/register">
        <button className='button_login'>
         Sign Up
        </button>
        </Link>
      </form>
    </div>
    </div>
    
  )
}
export default Login