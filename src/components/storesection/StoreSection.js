import React from 'react'
import Arrow from '../../images/icon-arrow.svg';
import QuoteIcon from '../../images/icon-quotes.svg';
import TestimonyPic from '../../images/avatar-testimonial.jpg';
import Herobgproductive from '../../images/illustration-2.svg';

const StoreSection = () => {
  return (
    <>
  <section>
  <div className="storage">
          <h2>Stay productive, where you are.</h2>
          <p>Never let location be an issue, when accessing your files, Fylo has you coverd for all of your file storage need</p>
          <p>Securely share files and folders with friends, family and colleagues for live collaboration No email attatchement required!</p>
            <div className='fylo-work'>
              <a href="/" >See how Fylo works <img src={Arrow} alt="" /></a>
            </div>

  <div className='card-section'>
       <div className="card">
            <img src={QuoteIcon} alt="" />
            <p>Fylo has improved our Teams productivity by an order of magnitude, 
              since making the switch our team has become well-oiled
              collaboration machine.
            </p>
           <div className="testimony">
                <img src={TestimonyPic} alt="" />
                <div className="msg">
                  <h4>Kyle Burton</h4>
                  <span>Founder & CEO. Huddle</span>
                </div>
           </div>
    </div>
  </div>
  </div>
  <img src={Herobgproductive} className="illustration" alt="" />
</section>

    </>
  )
}

export default StoreSection