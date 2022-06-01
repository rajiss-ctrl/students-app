import React from 'react'
import {Link} from 'react-router-dom'
import Kodecamp from '../../images/kodecamp.png'
import './Landingnavbar.css'

const LandigNavbar = () => {
  return (
    <nav>
        <ul>
            <li className='logo'><Link to='/'><img src={Kodecamp} alt="" /> <h1>Learnas</h1></Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    </nav>
  )
}

export default LandigNavbar