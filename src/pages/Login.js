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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faMailBulk, faPerson, faUnlockKeyhole, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


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
      <div className="email">
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Your Email'/>
          <FontAwesomeIcon icon={faUser} className="fa-1x email-icon" ></FontAwesomeIcon> 
      </div>
      <div className="password">
          <input  onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Your Password' />
          <FontAwesomeIcon icon={faUnlockKeyhole} className="fa-1x pass-icon"  ></FontAwesomeIcon> 
      </div>
          <input  type="submit" value="Login with password" />

      <div className="reg">
          <button>Forget Password</button>
          <Link to='/signup'><button>Register</button></Link>
      </div>
    <div className='google'>
        <button onClick={handleGoogleSignin}>Signin With Google</button>
        <FontAwesomeIcon icon={faGoogle} className="fa-1x google-icon"  ></FontAwesomeIcon> 
    </div>
      </form>
     </div>

    </div>
  )
}

export default Login