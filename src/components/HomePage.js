import React from 'react'
import Footer from './Footer'
import Landing from './Landing'
import teacherImg from '../assets/svg/teacher.png'
import studentImg from '../assets/svg/student.png'

function HomePage() {
    return (
        <div>
            <Landing />
            <div className="middle_div">
                <div className="teacher">
                    <div className="teacher-text">
                        <h2>Looking For Teacher</h2>
                        <div className="h3">
                            Are you a student and looking for a teacher, just fill the form according to your requirement.
                            We will find best teacher for you and contact you as soon as possble.
                        </div>
                        <button>Create Profile</button>
                    </div>
                    <div className="teacher-image">
                        <img src={teacherImg} alt=""/>
                    </div>
                </div>
                <div className="teacher">
                    
                    <div className="teacher-image">
                        <img src={studentImg} alt=""/>
                    </div>
                    <div className="teacher-text">
                        <h2>Looking For Student</h2>
                        <div className="h3">
                            Are you a student and looking for a teacher, just fill the form according to your requirement.
                            We will find best teacher for you and contact you as soon as possble.
                        </div>
                        <button>Create Profile</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage
