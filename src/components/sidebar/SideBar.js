import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../Firebase'
import './SideBar.css'

const SideBar = () => {
  let navigate = useNavigate()

  async function handleLogout(){
    try{
      await logout()
    }catch{
      alert('error!')
    }
  navigate('/students-app')
  }
  return (
    <div className='sidebar-wrapper'>
        <aside>
          <Link to='/dashboard'><h1>Dashboard</h1></Link>
            
            <ul>
                <li><Link to='/courses'>Courses</Link></li>
                {/* <li><Link>Profile</Link></li> */}
                <li onClick={handleLogout}><button>Logout</button></li>
            </ul>
        </aside>
    </div>
  )
}

export default SideBar