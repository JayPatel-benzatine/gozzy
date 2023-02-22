import React from 'react'
import MainNav from '../component/navbar/MainNav'
import Jumbotron from '../component/jumbatron/Jumbotron'
import Footer from '../component/footer/Footer'
import Contact from '../component/contactus/Contact'
import Scroll from '../component/Scroll Button/Scroll'
const ContactUs = () => {
    return (
            <div>
                <MainNav />
                <Jumbotron name='contact-us' />
                <Contact />
                <Footer />
                <Scroll />
            </div>
    
    )
}

export default ContactUs