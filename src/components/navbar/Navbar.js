import React from 'react'
import Logo from '../../images/logo.svg';

const Navbar = () => {
  return (
    <div className='top-nav'>
     <nav>
        <img src={Logo} alt="" />
        <ul>
          <li><a href="/">Features</a></li>
          <li><a href="/">Team</a></li>
          <li><a href="/">Sign In</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar