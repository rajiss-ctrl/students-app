import React from 'react'
import { Link } from 'react-router-dom'
import LoginAsideImg from '../images/login.png'
import LogingFormImg from '../images/previewimg.png'
import './css/Login.css'
const Login = () => {
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
      <input type="email" />
      <input type="password" />
      <input type="submit" value="LOGIN" />

      <div className="reg">
        <button>Forget Password</button>
        <Link to='/signup'><button>Register</button></Link>
        
      </div>
      </form>
    </div>
  )
}

export default Login