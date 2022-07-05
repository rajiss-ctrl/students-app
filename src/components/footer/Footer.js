import React from 'react'
import Logofooter from '../../images/logofooter.svg';
import Phone from '../../images/icon-phone.svg';
import Email from '../../images/icon-email.svg';
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
const Footer = ({alert,handleClick}) => {
  return (
    <footer>

        <div className="footer-nav">
            <img src={Logofooter} alt="" />
            <nav>
                <ul>
                    <li><a href="/"><img src={Phone} alt="" /> Phone:+1-543-123-5467</a></li>
                    <li><a href="/"><img src={Email} alt="" />example@fylo.com</a></li>
                </ul>
                <ul>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Jobs</a></li>
                    <li><a href="/">Press</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
                <ul>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">Terms</a></li>
                    <li><a href="/">Privacy</a></li>
                </ul>
                <ul className='socio'>
                    <li><a href="/"><FaFacebook className="icons"/></a></li>
                    <li><a href="/"><FaTwitter className="icons"/></a></li>
                    <li><a href="/"><FaInstagram className="icons"/></a></li>
                </ul>
            </nav>
        </div>
    </footer>
  )
}

export default Footer