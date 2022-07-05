import React from 'react'


import './App.css'
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/hero/HeroSection';
import StoreSection from './components/storesection/StoreSection';
import Footer from './components/footer/Footer';
import Subscribe from './components/subscription/Subscribe';
const App = () => {
  const [alert, setAlert] = useState("")
  const handleClick = ()=>{
    let message = 'please check your email!';
    setAlert(message)
  }
  return (
    <div>
     <Navbar/>
    <HeroSection alert={alert} handleClick={handleClick}/>
    <StoreSection/>
    <Subscribe alert={alert} handleClick={handleClick}/>
    <Footer />
    </div>
  )
}

export default App