import React from 'react'
import Footer from './Footer'
import Landing from './Landing'
import teacherImg from '../assets/svg/teacher.png'
import studentImg from '../assets/svg/student.png'
import { Link } from 'react-router-dom'

import studentPro from '../assets/studentPro.png'

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
                        <button type='button'><Link to={'/student'}>Create Profile</Link></button>
                    </div>
                    <div className="teacher-image">
                        <img src={teacherImg} alt="teachder template Icon"/>
                    </div>
                </div>
                <div className="teacher">
                    
                    <div className="teacher-image">
                        <img src={studentImg} alt=""/>
                    </div>
                    <div className="teacher-text">
                        <h2>Looking For Student</h2>
                        <div className="h3">
                            Are you a teacher and looking for a studnet, just fill the form .
                            We will find nearest student for you and contact you as soon as possble.
                        </div>
                        <button type='button'><Link to={'/teacher'}>Create Profile</Link></button>
                    </div>
                </div>
            </div>
            <div className="working">
                <div className="h1 sub-header" style={{margin:'10px',color:"#0d4f8a"}}>How It Works</div>
                
                <img src={studentPro} alt="studentProcedure"/>
                <div className="text">
                    <div className="text1">
                        <h2 className='sub-header'>For Student / Parents</h2>
                        <ul>
                            <li>
                                <span className='sub-header'>Tell Us Your Need : </span>
                                Just fill few details about your home tuition needs and we will show your requirements to all our tutors.
                            </li>
                            <li>
                                <span className='sub-header'>Get Free Demo: : </span>
                                Interested home tutors will apply
                                for your home tuition and we will arrange a free demo class by our home tutor.
                            </li>
                            <li>
                                <span className='sub-header'>Confirm If You Like: </span>
                                After the demo class, evaluate the teacher and
                                if you are satisfied with tutors teaching abilities then confirm him.
                            </li>
                        </ul>
                        <div className='center'>
                            <button><Link to='/student'>Apply Now</Link></button>
                        </div>
                        
                    </div>
                    <div className="text2">
                        <h2 className='sub-header'>For Teacher</h2>
                        <ul>
                            <li>
                                <span className='sub-header'>Create Profile :  </span>
                                Advertise about yourself by creating your profile.Profiles with more details gets maximum attention from our students and parents.
                            </li>
                            <li>
                                <span className='sub-header'>Get Students: </span>
                                You can find students by searching tuition needs posted on our website which matches your profile.Apply tuitions relevant to you.
                            </li>
                            <li>
                                <span className='sub-header'>Start Earning : </span>
                                Students / Parents who posted the tuition needs you applied will request a demo class.Give your best in the demo class to get the tuition confirmed.
                            </li>
                        </ul>
                        <div className="center">
                            <button><Link to='/teacher'>Apply Now</Link></button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <Footer />
            <div id="background-wrap">
                <div class="bubble x1"></div>
                <div class="bubble x2"></div>
                <div class="bubble x3"></div>
                <div class="bubble x4"></div>
                <div class="bubble x5"></div>
                <div class="bubble x6"></div>
                <div class="bubble x7"></div>
                <div class="bubble x8"></div>
                <div class="bubble x9"></div>
                <div class="bubble x10"></div>
            </div>
        </div>
    )
}

export default HomePage
