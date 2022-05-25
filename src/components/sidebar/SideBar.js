import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'

const SideBar = () => {
  return (
    <div className='sidebar-wrapper'>
        <aside>
          <Link to='/dashboard'><h1>Dashboard</h1></Link>
            
            <ul>
                <li><Link to='/courses'>Courses</Link></li>
                {/* <li><Link>Profile</Link></li> */}
                <li><Link to='/logout'>Logout</Link></li>
            </ul>
        </aside>
    </div>
  )
}

export default SideBar