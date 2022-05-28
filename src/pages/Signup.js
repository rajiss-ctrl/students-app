import React, { useState } from 'react'
// import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Register } from '../Firebase'
import { useUserAuth } from '../context/UserAuthContext'
import './css/Signup.css'

const Signup = ({currentStudent}) => {
  // let navigate = useNavigate()
  // const [loading, setLoading]= useState(false)

  //   const emailRef= useRef()
  //   const passwordRef= useRef()
    const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

    async function handleSubmit(e){
      e.preventDefault()
       setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
    }
  return (
    <div className='signup-wrapper'>
       {error && <h3>{error}</h3>}
        <form onSubmit={handleSubmit}>
            <h1>REGISTER </h1>
            <input  onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' />
            <input   onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
            <input  type="submit" value="Sign Up" />
        </form>
    </div>
  )
}

export default Signup