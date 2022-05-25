import React from 'react'
import LandigNavbar from '../components/navbar/Landingnavbar'
import LandingImg from '../images/bandicam 2022-02-17 11-02-33-263.png'
import './css/LandingPage.css'


const LandingPage = () => {
  return (
    <div className='landingpage-wrapper'>
        <LandigNavbar/>
        <div className="landingPage-wrap">
          <div className="intro">
            <h1><strong>Learn</strong> on your class <span>schedule</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tenetur 
            animi fuga blanditiis explicabo commodi minima vero cupiditate
             perspiciatis repellat.</p>
          </div>
          <div className="intro-img">
            <img src={LandingImg} alt="" />
          </div>
        </div>
    </div>
  )
}

export default LandingPage