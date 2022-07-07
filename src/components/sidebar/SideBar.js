import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext'
import Kodecamp from '../../images/kodecamp.png'
import {FaLocationArrow} from 'react-icons/fa'
import {FaSignOutAlt} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
// import { logout } from '../../Firebase'

import './SideBar.css'

const SideBar = ({open}) => {

  let navigate = useNavigate()
  
  const { logOut, user } = useUserAuth();

  async function handleLogout(){

     try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div className='sidebar-wrapper' >

        <aside>
               <Link className='cname' to='/'><img src={Kodecamp} alt="" /><h1>Learnas</h1></Link>
            <ul>
                <li><Link to='/dashboard'><FaHome/><span>Dashboard</span></Link></li>
                <li><Link to='/courses'><FaLocationArrow/><span>Courses</span></Link></li>
                <li><Link to='/profilepage'><FaUserAlt/><span>Profile</span></Link></li>
            </ul>
                 <div className="logout">
                  <FaSignOutAlt/><button onClick={handleLogout}>Logout</button>
                 </div>
        </aside>
    </div>
  )
}

export default SideBar