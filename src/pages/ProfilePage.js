import React,{useState} from 'react'
import SideBar from '../components/sidebar/SideBar'
import { useUserAuth } from '../context/UserAuthContext'
import {FaTimes} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import './css/ProfilePage.css'

const ProfilePage = () => {
    const {user} = useUserAuth()
 const [open,setOpen] = useState(false)
  const handleToggle = ()=>{
      setOpen(!open)
  }

  return (
    <div className='profile-wrapper'>
      <div className="toggle-wrapper">
          <div onClick={handleToggle}  className={ open ? "togOp" : "togClo"}>
              <FaTimes/>
        </div>
        <div  onClick={handleToggle} className={!open ? "togOp" : "togClo"}>
              <FaBars/>
        </div>
        </div>
      <div id="sidebar" className={  open ? "sidetogOp" : "sidetogClo"}>
        <SideBar open={open}/>
      </div>
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