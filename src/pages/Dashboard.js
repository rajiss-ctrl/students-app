import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import { useUserAuth } from '../context/UserAuthContext'
import BookLover from '../images/undraw_Book_lover_re_rwjy-removebg-preview.png'

import './css/Dashboard.css'

const Dashboard = () => {
const {user} = useUserAuth();
 
  return (
    <div className='dashboard-wrapper'>
      <SideBar/>
      <div className="userpage">
        <div className="welcome">
         <h1> welcome </h1>
         <h3> { user.displayName}</h3>
        </div>
        <div className="dashboardimg">
          <img src={BookLover} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard