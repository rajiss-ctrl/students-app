import React from 'react'
import {Link} from 'react-router-dom'
import './Landingnavbar.css'

const LandigNavbar = () => {
  return (
    <nav>
        <ul>
            <li><h1>Learnas</h1></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    </nav>
  )
}

export default LandigNavbar