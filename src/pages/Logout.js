import React from 'react'
import './css/Logout.css'

const Logout = () => {
  return (
    <div className='logout-wrapper'>
            <form action="">
                <input type="text" placeholder='Full Name' />
                <input type="email" placeholder='Email' />
                <input type="phone" placeholder='Phone' />
                <input type="submit" value='Submit' />
            </form>
    </div>
  )
}

export default Logout