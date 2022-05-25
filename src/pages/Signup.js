import React from 'react'
import { useRef } from 'react'
import { Register } from '../Firebase'
import './css/Signup.css'

const Signup = () => {
    const emailRef= useRef()
    const passwordRef= useRef()

    async function handleSignup(e){
      e.preventDefault()
        await Register(emailRef.current.value, passwordRef.current.value)
    }
  return (
    <div className='signup-wrapper'>
        <form action="">
            <h1>REGISTER </h1>
            <input ref={emailRef} type="email" placeholder='Your Email' />
            <input  ref={passwordRef} type="password" placeholder='Password' />
            <input  onClick={handleSignup} type="submit" value="Sign Up" />
        </form>
    </div>
  )
}

export default Signup