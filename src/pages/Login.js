import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
// import { login } from '../Firebase'
import LoginAsideImg from '../images/login.png'
import LogingFormImg from '../images/previewimg.png'
// import { useRef } from 'react'
// import { useUserAuth } from "./UserAuthContext";
import { provider } from '../context/UserAuthContext'
import './css/Login.css'
import { getAuth, signInWithPopup } from 'firebase/auth'


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

 function handleGoogleSignin(){
  const auth= getAuth();
  signInWithPopup(auth,provider)
  .then((result)=>{
    const user = result.user
     navigate("/dashboard");
    console.log(user)
  })
    
  } 

  return (
    <div className='login-wrapper'>
     <div className="content">
                  <Link className="close" to='/'><h1 >X</h1></Link>
        <aside>
        <h2>Student Login</h2>
        <p>Make sure your account is secured</p>
        <img src={LoginAsideImg} alt="" />
      </aside>
      <form onSubmit={handleLogin}>
      <div className="img">
        <img src={LogingFormImg} alt="" />
      </div>
      <input   onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Your Email'/>
      <input  onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Your Password' />
      <input  type="submit" value="Login with password" />

      <div className="reg">
        <button>Forget Password</button>
        <Link to='/signup'><button>Register</button></Link>
        
      </div>
      <button className='google' onClick={handleGoogleSignin}>Signin With Google</button>
      </form>
     </div>

    </div>
  )
}

export default Login