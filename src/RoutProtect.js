import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Signup from './pages/Signup'

// const Auth = ()=>{
//   let adminDetail = JSON.parse(sessionStorage.getItem('adminDetails'))
// return adminDetail
// }
export const RoutProtect = () => {
// const isAuth = Auth()
//   return isAuth ? <Outlet/> : <Navigate to="/signup"/>
  return <Signup/> ? <Outlet/> : <Navigate to="/login"/>
  
}
