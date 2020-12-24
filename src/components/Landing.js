import React from 'react'
import { Link } from 'react-router-dom'
import backgrundImage from '../assets/svg/home.png'
function Landing() {
    return (
        <div className='landing_page'>
            <div className="landing_page-backgrond">
                {/* <img src ={backgrundImage} alt = "backgruond image" / > */}
            </div>
            <div className="nav">
                <div className="logo">
                    <h1>HomeGuru</h1>
                </div>
                <div className="routes">
                    <button className="navbtn">Home</button>
                    <button className="navbtn"><Link to={'#footer'}>Contact Us</Link></button>
                </div>
            </div>
            <div className="welcome">
                <h1>Welcome to HomeGuru</h1>
                <div className="h3">We Connent Teacher and student to each other.</div>
                <button type='button'>Arrange Demo</button>
            </div>
        </div>
    )
}

export default Landing
