import React,{useState} from 'react'
import SideBar from '../components/sidebar/SideBar'
import { useUserAuth } from '../context/UserAuthContext'
import BookLover from '../images/undraw_Book_lover_re_rwjy-removebg-preview.png'
import {FaTimes} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import './css/Dashboard.css'

const Dashboard = () => {
const {user} = useUserAuth();
 const [open,setOpen] = useState(false)
  const handleToggle = ()=>{
      setOpen(!open)
  }

  return (
    <div className='dashboard-wrapper'>
        <div className="toggle-wrapper">
          <div onClick={handleToggle}  className={ open ? "togOp" : "togClo"}>
              <FaTimes/>
        </div>
        <div  onClick={handleToggle} className={!open ? "togOp" : "togClo"}>
              <FaBars/>
        </div>
        </div>
      <div id="sidebar" className={  open ? "togOp" : "togClo"}>
        <SideBar open={open}/>
      </div>
      
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