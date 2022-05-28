import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
// import { login } from '../Firebase'
import LoginAsideImg from '../images/login.png'
import LogingFormImg from '../images/previewimg.png'
// import { useRef } from 'react'
// import { useUserAuth } from "./UserAuthContext";

import './css/Login.css'
const Login = () => {
  let navigate = useNavigate()
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();


async function handleLogin(e){
   e.preventDefault()
       setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
} 

  return (
    <div className='login-wrapper'>
      <aside>
        <h2>Student Login</h2>
        <p>Make sure your account is secured</p>
        <img src={LoginAsideImg} alt="" />
      </aside>
      <form onSubmit={handleLogin}>
      <div className="img">
        <img src={LogingFormImg} alt="" />
      </div>
      <input   onChange={(e) => setEmail(e.target.value)} type="email" />
      <input  onChange={(e) => setPassword(e.target.value)} type="password" />
      <input  type="submit" value="LOGIN" />

      <div className="reg">
        <button>Forget Password</button>
        <Link to='/signup'><button>Register</button></Link>
        
      </div>
      </form>
    </div>
  )
}

export default Login