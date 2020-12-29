import React from 'react'
import PngLogo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div className="nav">
                <div className="logo">
                    <img src={PngLogo} alt=""/>
                </div>
                <div className="routes">
                    <button className="navbtn"><Link to={'/?#footer'}>Home</Link></button>
                    <button className="navbtn"><Link to={'/#footer'}>Contact Us</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Header
