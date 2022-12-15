import  Logo  from '../images/myfrts-logo.png'
import  headerImage  from '../images/header-img.png'
import hamburger from '../images/hamburger.png'

import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <nav className="navbar">
            <img src={Logo} alt="" srcset="" />
            <div className="nav-input">
                <ul className="nav-links">
                    <li className="nav-linkitem nav-linkhome"><a href="#">Home</a></li>
                    <li className="nav-linkitem"><a href="#">About</a></li>
                    <li className="nav-linkitem"><a href="#">Services</a></li>
                    <li className="nav-linkitem"><a href="#">Resources</a></li>
                    <li className="nav-linkitem"><a href="#">Partners</a></li>
                    <li className="nav-linkitem"><a href="#">Contact Us</a></li>
                </ul>
                <div className="nav-btns">
                    <button className="sign-in">Sign In</button>
                    <button className="sign-up">Sign Up</button>
                </div>
            </div>
            <div className="hamburger nav-icon">
                <img src={hamburger} alt="" srcset="" />
            </div>
        </nav>
        <section className="header-main">
            <div className="header-info">
                <h1>Optimizing Nigeria's cargo logistics network for <span className="orange">
                     maximum success </span></h1>
                <p>
                    Welcome to Myfrts Cargo Logistics! We are a leading provider of cargo transportation 
                    and logistics services, including freight forwarding, custom clearance, cargo insurance,
                     haulage, freight financing, and trade consulting. Contact us today to learn how we can 
                     help with all of your cargo needs and take care of the logistics, so you can focus on
                      running your business."
                </p>
                <div className="header-link">
                    <a href='mailto:info@myfrts.com?' className="move-cargo">Move Cargo</a>
                </div>
            </div>
            <img src={headerImage} alt="" srcset="" />
        </section>
    </div>
  )
}

export default Header
