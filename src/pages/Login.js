import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { login } from '../Firebase'
import LoginAsideImg from '../images/login.png'
import LogingFormImg from '../images/previewimg.png'
import { useRef } from 'react'
import './css/Login.css'
const Login = () => {
  let navigate = useNavigate()
  const emailRef= useRef()
  const passwordRef= useRef()

async function handleLogin(e){
   e.preventDefault()
      try {
        await login(emailRef.current.value, passwordRef.current.value)?
        navigate('/dashboard') :
        alert('error!')
        
      } catch {
        alert('error!')
      }
} 

  return (
    <div className='login-wrapper'>
      <aside>
        <h2>Student Login</h2>
        <p>Make sure your account is secured</p>
        <img src={LoginAsideImg} alt="" />
      </aside>
      <form action="">
      <div className="img">
        <img src={LogingFormImg} alt="" />
      </div>
      <input  ref={emailRef} type="email" />
      <input  ref={passwordRef} type="password" />
      <input onClick={handleLogin} type="submit" value="LOGIN" />

      <div className="reg">
        <button>Forget Password</button>
        <Link to='/signup'><button>Register</button></Link>
        
      </div>
      </form>
    </div>
  )
}

export default Login