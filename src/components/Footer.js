import React from 'react'
import footerLogo from '../images/footer-logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-listone">
        <img src={footerLogo} alt="" srcset="" className='footer-logo'/>
        <div className="footer-line"></div>
        <span className='span-one'>©Myfrts Incorporated</span>
      </div>
      <div className="footer-listtwo">
        <p>Address</p>
        <span>No 6 hindera street beside comment</span> 
        <span>shipping Apapa GRA Lagos</span>
      </div>
      <div className="footer-listthree">
        <p>Phone numbers</p>
        <span>+234 818 539 6995</span> 
        <span>+234 806 959 2395</span>
      </div>
      <div className="footer-listfour">
        <p>Email address</p>
        <span>info@myfrts.com</span>
      </div>
    </div>
  )
}

export default Footer
