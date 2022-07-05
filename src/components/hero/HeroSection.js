import React from 'react'
import Herobgcurve from '../../images/illustration-1.svg';

const HeroSection = ({alert,handleClick}) => {
  return (
    <>
     <div className="hero">
        <div className="hero-content">
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>Fylo stores your most important in one secure location, access them wherever
            you need, share and collaborate with friends, family and co-workers
          </p>
          <div className="signup">
            <input type="email" placeholder='example@fylo@gmail.com' />
            <button type='submit' onClick={handleClick}>Get Start</button>
            <p>{alert}</p>
          </div>
        </div>
        <div className="hero-image">
            <img src={Herobgcurve} alt="" />
        </div>
      </div>
    </>
  )
}

export default HeroSection