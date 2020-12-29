import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
function Landing() {
    return (
        <div className='landing_page'>
            <div className="landing_page-backgrond">
                {/* <img src ={backgrundImage} alt = "backgruond image" / > */}
            </div>
            <Header />
            <div className="welcome">
                <h1>Welcome to HomeTutoring</h1>
                <div className="h3">We Connent Teacher and student to each other.</div>
                <button type='button'><Link to={'/student'}>Arrange Demo</Link></button>
            </div>
        </div>
    )
}

export default Landing
