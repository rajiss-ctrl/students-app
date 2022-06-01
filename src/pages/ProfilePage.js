import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import { useUserAuth } from '../context/UserAuthContext'
import './css/ProfilePage.css'

const ProfilePage = () => {
    const {user} = useUserAuth()
  return (
    <div className='profile-wrapper'>
      <SideBar/>
      <div className="profile">
        <h1>PROFILE</h1>
        <p>Personal Details</p>
        <div className="profile-details">
          <div><img src={user.photoURL} alt="profile" /></div>
       <div className="profile-info">
          <div><h2>Full Name: </h2>{user.displayName}</div>
          <div><h3>Email: </h3>{user.email}</div>
       </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage