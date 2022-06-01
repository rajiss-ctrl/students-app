import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext'
import Kodecamp from '../../images/kodecamp.png'
// import { logout } from '../../Firebase'

import './SideBar.css'

const SideBar = () => {
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
    <div className='sidebar-wrapper'>
        <aside>
               <Link className='cname' to='/'><img src={Kodecamp} alt="" /><h1>Learnas</h1></Link>
            <ul>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/courses'>Courses</Link></li>
                <li><Link to='/profilepage'>Profile</Link></li>
            </ul>
                 <button onClick={handleLogout}>Logout</button>
        </aside>
    </div>
  )
}

export default SideBar