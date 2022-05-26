import React, { useState } from 'react'

import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Register } from '../Firebase'
import './css/Signup.css'

const Signup = ({currentStudent}) => {
  let navigate = useNavigate()
  const [loading, setLoading]= useState(false)

    const emailRef= useRef()
    const passwordRef= useRef()

    async function handleSignup(e){
      e.preventDefault()
      setLoading(true)
      try {
        
        {
          ( await Register(emailRef.current.value, passwordRef.current.value) )? navigate('/dashboard') : 
          navigate('/login')
        }
      } catch {
        alert('User already exist!')
      }
      setLoading(false)
        // {
        //   await Register(emailRef.current.value, passwordRef.current.value)
        //   &&
        //   navigate('/login')
        // }
    }
  return (
    <div className='signup-wrapper'>
        <form action="">
            <h1>REGISTER </h1>
            <input ref={emailRef} type="email" placeholder='Your Email' />
            <input  ref={passwordRef} type="password" placeholder='Password' />
            <input disabled={loading || currentStudent} onClick={handleSignup} type="submit" value="Sign Up" />
        </form>
    </div>
  )
}

export default Signup