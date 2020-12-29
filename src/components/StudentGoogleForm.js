import React from 'react'
import Header from './Header'


function StudentGoogleForm() {
    return (
        <div>
            <Header />
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdk1eDsSBWgztvUbuBS4lb9FetIsKen1nonP8iBxn2RGqrIsw/viewform?embedded=true" 
                width="100%" 
                height="2392" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0"
                title='Student Form'
            >Loading…
            </iframe>
        </div>
    )
}

export default StudentGoogleForm
