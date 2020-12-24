import React from 'react'


function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer_list">
                <div className="footer_list-box">
                    <div className="footer_list_box-header">
                        Location
                    </div>
                    <div className="footer_list_box-content">
                        <li>Gaya</li>
                        <li>Kolkata</li>
                    </div>
                </div>
                <div className="footer_list-box">
                    <div className="footer_list-box">
                    <div className="footer_list_box-header">
                        Links
                    </div>
                    <div className="footer_list_box-content">
                        <li>Teacher From</li>
                        <li>Student Form</li>
                    </div>
                </div>
                </div>
                <div className="footer_list-box">
                    <div className="footer_list-box">
                    <div className="footer_list_box-header">
                        Contact Us
                    </div>
                    <div className="footer_list_box-content">
                        <li>92854042400</li>
                        <li>name@domin.com</li>
                    </div>
                </div>
                </div>
            </div>
            <div className="copyright">
                All Right Reserved @ HomeGuru
            </div>
        </div>
    )
}

export default Footer
