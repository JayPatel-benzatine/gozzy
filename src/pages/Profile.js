import React from 'react'
import MainNav from '../component/navbar/MainNav'
import Jumbotron from '../component/jumbatron/Jumbotron';
import Footer from '../component/footer/Footer'
import Profiles from '../component/Profile/Profiles'
import Scroll from '../component/Scroll Button/Scroll'

const Profile = () => {
    return (
        <div className='profile'>
            <MainNav />
            <Jumbotron name='profile'/>
            <Profiles />
            <Footer />
            <Scroll />
        </div>
    )
}

export default Profile