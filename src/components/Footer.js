import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer_list">
                <div className="footer_list-box">
                    <div className="footer_list_box-header">
                        Location
                    </div>
                    <div className="footer_list_box-content">
                        <li>Sitamarhi</li>
                        <li>Muzaffarpur</li>
                    </div>
                </div>
                <div className="footer_list-box">
                    <div className="footer_list-box">
                    <div className="footer_list_box-header">
                        Links
                    </div>
                    <div className="footer_list_box-content">
                        <li><Link to='/teacher'>Teacher From</Link></li>
                        <li><Link to='/student'>Student From</Link></li>
                    </div>
                </div>
                </div>
                <div className="footer_list-box">
                    <div className="footer_list-box">
                    <div className="footer_list_box-header">
                        Contact Us
                    </div>
                    <div className="footer_list_box-content">
                        <li>8935893928</li>
                        <li>subodh9by4@gmail.com</li>
                    </div>
                </div>
                </div>
            </div>
            <div className="copyright">
            2021 &#169; All Right Reserved @ <span style={{color:' rgb(1, 5, 243)'}}>HomeTutoring</span>
            </div>
        </div>
    )
}

export default Footer
