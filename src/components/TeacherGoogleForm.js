import React from 'react'
import Header from './Header'

function TeacherGoogleForm() {
    return (
        <div>
            <Header />
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfwgNF_8AEeC8_EuquFr1CPe1BenAsd2cS0QzrQnP1EFqGg2g/viewform?embedded=true" 
                width="100%" 
                height="2292" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0"
                title='Teacher From'
            >
            </iframe>
        </div>
    )
}

export default TeacherGoogleForm
